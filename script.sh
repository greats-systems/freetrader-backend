read -p "Type your commit message": message
# echo $message
git add .
git commit -m "$message"
git push -f -u origin main
