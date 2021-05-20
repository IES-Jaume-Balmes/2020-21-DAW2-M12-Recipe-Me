## Login
curl -X POST -H "Content-Type: application/json" https://localhost:8000/api/login_check -d '{"username":"sergi@recipeme.com","password":"sergi"}'

## GET SIN TOKEN
curl -X GET https://localhost:8000/api/recipes

## GET CON TOKEN
curl -X GET -H "Authorization: BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjE1NTExMDgsImV4cCI6MTYyMTU1NDcwOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InNlcmdpIn0.Z9rzypnccNpVE-aSu436osxcYrUmcQYzAEZ3J11X-VcnN-13MJADnfvJMeE0uJnr3vCmMZ4pfcHUI3Cylu5IGmqiDp_YnQV9LDaWGSZu6R-G074cvbkPpQ6jdHwlY9NEn-fC7ylAq3m7YNqZHyP_6YVNnxqFGZFjBGJsj6PE3p-w_kuwg_G1rqsFZZUVMR9XbeF2Lc3fUWHwH-9mKLP2r88A0GsGmQHoAoaYhtC4fpI9C5byf5_MKyFocYA6Ch8LYfOyRT17EZNOCwoId4qsXsnRZ97TrBPs-APpiB7NDe3keueQq4xhRIQ1MpQCG080ciwvnynC1YsA79Rq8QaUmA" https://localhost:8000/api/recipes