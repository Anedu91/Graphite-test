import app from './app'

app.listen(app.get('port'), listening)

function listening(){
  console.log('Server running')
  console.log(`Running on localhost ${app.get('port')}`)
}