curl 'https://tic-tac-toe-wdi.herokuapp.com/games' \
--include \
-- POST \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data = '{}'
