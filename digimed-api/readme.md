# digimed-api
This API allows to handle user profiles, patient information, physician records, and even prescriptions.


## Getting Started
To set up the "digimed-api" project and configure the necessary environment variables, follow these steps:

1. Clone the "digimed-api" repository by running the following command in your terminal:
```
git clone https://oauth:your_github_token@https://github.com/No-Country/c13-06-n-python-react.git
```
Or
```
git clone git@github.com:No-Country/c13-06-n-python-react.git
```

2. After cloning the repository, navigate to the project's directory:
```
cd c13-06-n-python-react/digimed-api
```

3. Install the required Python packages by running the following command:
```
pip install -r requirements.txt
```

4. Rename the `.env.example` file to `.env`:
```
mv .env.example .env
```

5. Open the `.env` file in a text editor and configure the variables based on your environment. Replace the placeholder values with your actual information:

```
DBNAME=My_DB_Name
MYSQL_USER=My_DB_Username
MYSQL_PASS=My_DB_Password
MYSQL_HOST=My_DB_Host
MYSQL_PORT=My_DB_Port
```

Ensure that you update each variable with the appropriate values specific to your setup. For example, replace "My_DB_Name" with the actual name of your database, "My_DB_Username" with the username for your database, and so on.

6. Save the `.env` file after making the necessary changes.

With the environment variables properly configured, the "digimed-api" project will be ready to run.

## Usage

To use the "digimed-api" script, follow these steps:

1. Open your terminal.

2. Navigate to the directory where the "manage.py" script is located.

3. Run the following command in your terminal:
```
python3 manage.py
```
This command will execute the script and initiate its functionality.

Make sure to keep the terminal session running to allow the script to continue its execution as scheduled.

## Endpoints
### Login
>Request
>```
>curl --location 'http://127.0.0.1:5000/api/v1/login' \
>--header 'Content-Type: application/json' \
>--data-raw '{
>    "email":"user@mail.com",
>    "password":"123456"
>}'
>```
>Response
>```
>{
>    "access_token": "abc123.dfghijk321.fdasdfas-asdf12fasdf",
>    "messages": "inicio correcto",
>    "user.id": 1
>}
>```
### Register
>Request
>```
>curl --location 'http://127.0.0.1:5000/api/v1/register' \
>--header 'Content-Type: application/json' \
>--data-raw '{
>    "name":"Jhon",
>    "last_name":"Doe",
>    "dni":"55566655",
>    "member":"0111",
>    "email":"jhon@mail.com",
>    "password":"123456"
>}'
>```
>Response
>```
>{
>    "messages": "Paciente creado correctamente"
>}
>```
### getPacients
>Request
>```
>curl --location 'http://127.0.0.1:5000/api/v1/patients' \
>--header 'Authorization: Bearer ***
>```
>Response
>```
>[
>    {
>        "dni": "654123655",
>        "id": 1,
>        "last_name": "Doe",
>        "member": "0123",
>        "name": "Jhon",
>        "user_id": 1
>    },
>    {
>        "dni": "25327505",
>        "id": 2,
>        "last_name": "Doe",
>        "member": "0234",
>        "name": "Jhane",
>        "user_id": 2
>    }
>]
>```

### getPacientsById
>Request
>```
>curl --location 'http://127.0.0.1:5000/api/v1/patients/:id' \
>--header 'Authorization: ***
>```
>Response
>```
>{
>    "dni": "654123655",
>    "id": 1,
>    "last_name": "Doe",
>    "member": "0123",
>    "name": "Jhon",
>    "user_id": 1
>}
>```

