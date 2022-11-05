* Why not to use prettier: 
* * We can use 'eslint --fix' as formatter. And prettier's rules is sames as eslint's rules. Eslint's rules will be covered by prettier. So we need not prettier.

* Why selected lint-stage: 
* * If we do not use lint-stage, we always need to check all files and the files that fixed by auto program will not to be added by git. If we use check command in lint-stage, it will help use to only check files changed this time (not all files). It will be better for us when developing.