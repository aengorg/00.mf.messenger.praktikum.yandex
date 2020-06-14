echo 'START DEPLOY';

git checkout master;

npm version minor;

git checkout deploy;

git merge master;

git add -A .;

git commit -m 'update';

git push origin deploy;

git checkout dev;

git merge master;

echo 'END DEPLOY';
