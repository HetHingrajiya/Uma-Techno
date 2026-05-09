$files = Get-ChildItem -Path e:\Uma-Techno\frontend\src -Recurse -Include *.tsx,*.ts
foreach ($f in $files) {
  $content = Get-Content -Raw $f.FullName
  $newContent = [regex]::Replace($content, '/images/([a-zA-Z0-9-\$\{\}]+)\.png', '/images/$1-v2.png')
  if ($content -ne $newContent) {
    Set-Content -NoNewline -Path $f.FullName -Value $newContent
    Write-Output "Updated $($f.Name)"
  }
}
Get-ChildItem -Path e:\Uma-Techno\frontend\public\images\*.png | Rename-Item -NewName { $_.Name -replace '\.png$','-v2.png' }
Write-Output "Images renamed."
