# vercel build script for D.I.R.T Stack Projects
# Activate shell
pipenv shell

# install dependencies
pipenv install

# collect static files
python3.9 manage.py collectstatic