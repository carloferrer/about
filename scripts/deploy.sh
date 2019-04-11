branch="production"
commit_message="$(date +%A) | $(date +%F) | $(date +%T)"

printf "\nCommitting to ${branch} with following message: ${commit_message}\n\n"
# per authors of 'gh-pages', clear cache to prevent errors
rm -rf node_modules/gh-pages/.cache \
# generate production build
react-scripts build \
# deploy to production
gh-pages -b "${branch}" -m "${commit_message}" -d build
