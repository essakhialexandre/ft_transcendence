# ft_transcendence

Since Docker runs in rootless mode on the school's computer, permissions will get a bit weird if you want to use the Hot Reload feature on the school's computer.
Rootless mode assign a UID to the volume which differs from your user ID and permissions for the volumes become messed up. However, on your VM or your personnal computer, if you're running Docker in root (which is the default), there are no issue.

The only workaround I use in school is to chmod -R 777 the backend folder so there are no issues with volume. Even then, it becomes impossible to delete the volumes from outside the docker.

I'm keeping the .env for now, but as soon as we'll start using the school's API I'll remove it.

Can check if it works by accessing localhost:3000 in your browser.
