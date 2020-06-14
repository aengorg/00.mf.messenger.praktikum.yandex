echo 'START DEPLOY';

git checkout master;

npm version minor;

git checkout deploy;

git merge master -m 'update';

git push origin deploy;

git checkout dev;

git merge master -m 'update';

echo 'END DEPLOY';
