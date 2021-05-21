## Login
curl -X POST -H "Content-Type: application/json" https://localhost:8000/api/login_check -d '{"email":"sergi@recipeme.com","password":"sergi"}'

## GET SIN TOKEN
curl -X GET https://localhost:8000/api/recipes

## GET CON TOKEN
curl -X GET https://localhost:8000/api/recipes -H "Authorization: BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjE1NTY1MDMsImV4cCI6MTYyMTU2MDEwMywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InNlcmdpQHJlY2lwZW1lLmNvbSJ9.otnTTuGgSq8c5chE0_5Ds6nmV5rFCHKQDKjVuJAhG2TVB46ubdHiFj17iAQExjIv4pNRqBll6JqyotFeQdXdVOMwB-fXEJHqEzCNIJ0mUhpjzo6lfcaoD9-9UM06LfMIJD7-s62h9UsdB3DITPcgHzmjm1ScxCsOTyo-03Ct-vXDLASEwNaXeEaubuZZ7bAPHbRkk2qrlH9oxJ4Gg7W8zc6pwj2iGg5p64YgAMnOn-0-FrOremeUX86poyDcUobH0PKqeKEsy0KSEHvBOHNBD-rVQ_m2CnxWOdRDcxSl_xOklvh4RcYL9Mk9HyBDDnv2fjctSNYMXzyVQw9y42-V9Q"

Problema, el JWT cogia el nombre de usuario en vez del email. Con la herramienta para debugar he podido solucionarlo.

## Debugar JWT
https://jwt.io/

## Tutorial youtube
https://www.youtube.com/watch?v=XT4oy1d1j-g&t=1368s