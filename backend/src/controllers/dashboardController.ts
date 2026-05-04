import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const [
        totalLeads, 
        totalProjects, 
        totalServices, 
        recentLeads,
        todayVisits,
        monthVisits,
        totalVisits
    ] = await Promise.all([
      prisma.contact.count(),
      prisma.project.count({ where: { published: true } }),
      prisma.service.count({ where: { published: true } }),
      prisma.contact.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.visit.count({ where: { createdAt: { gte: todayStart } } }),
      prisma.visit.count({ where: { createdAt: { gte: monthStart } } }),
      prisma.visit.count()
    ]);

    // Graph data for last 7 months
    const graphData = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const nextD = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
        
        const [lCount, vCount] = await Promise.all([
            prisma.contact.count({ where: { createdAt: { gte: d, lt: nextD } } }),
            prisma.visit.count({ where: { createdAt: { gte: d, lt: nextD } } })
        ]);

        graphData.push({
            name: d.toLocaleString('default', { month: 'short' }),
            leads: lCount,
            visits: vCount
        });
    }

    res.status(200).json({
      stats: [
        { name: "Total Leads", value: totalLeads.toString(), change: "Live", trendingUp: true },
        { name: "Today's Visits", value: todayVisits.toString(), change: "Live", trendingUp: true },
        { name: "Monthly Visits", value: monthVisits.toString(), change: "Live", trendingUp: true },
        { name: "Active Projects", value: totalProjects.toString(), change: "Live", trendingUp: true },
        { name: "All-Time Visits", value: totalVisits.toLocaleString(), change: "Total", trendingUp: true },
      ],
      recentLeads,
      graphData
    });
  } catch (error) {
    console.error('Dashboard Stats Error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch dashboard stats' });
  }
};
