pushd "%~dp0\.."

rd /S /Q ".deploy"
mkdir ".deploy"

for /f "tokens=*" %%a in ('jq .version manifest.json --raw-output') do set version=%%a

del ".deploy\custom-new-tab-title_%version%.xpi"
7za a -r ".deploy\custom-new-tab-title_%version%.xpi" .\* -xr!.* -xr!.deploy -xr!.devtools
