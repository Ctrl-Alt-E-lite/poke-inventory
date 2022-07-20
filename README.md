# Pokemon App

## Create Your Own Pokemon Team
By searching the [PokeApi database](https://pokeapi.co/), users can create their own pokemon team, and view the pokedex, complete with all of the known pokemon to date!

_______________________
## Poke_Inventory API

### GET : GET_ALL_TEAMS
returns all teams

http://localhost:8080/api/teams


```json
{
    "allTeams": [
        {
            "id": 1,
            "teamName": "Really Good Team Name",
            "pokemon": "[2]",
            "createdAt": "2022-07-20T20:22:03.000Z",
            "updatedAt": "2022-07-20T20:29:07.000Z"
        },
        {
            "id": 2,
            "teamName": "Really Good Team Name",
            "pokemon": "[]",
            "createdAt": "2022-07-20T20:22:03.000Z",
            "updatedAt": "2022-07-20T20:22:03.000Z"
        }
    ],
    "success": true,
    "message": "All teams returned"
}
```

### GET:  GET_ALL_POKEMON_ON_TEAM

returns all pokemon on a team

http://localhost:8080/api/teams/1/all-pokemon

```json
        {
            "id": 1,
            "teamId": null,
            "pokedex": 1,
            "name": "{\"english\":\"Bulbasaur\",\"japanese\":\"フシギダネ\",\"chinese\":\"妙蛙种子\",\"french\":\"Bulbizarre\"}",
            "type": "[\"Grass\",\"Poison\"]",
            "base": "{\"HP\":45,\"Attack\":49,\"Defense\":49,\"Sp. Attack\":65,\"Sp. Defense\":65,\"Speed\":45}",
            "createdAt": "2022-07-20T20:22:03.000Z",
            "updatedAt": "2022-07-20T20:22:03.000Z"
        },
```

### GET: GET_ALL_POKEMON

returns all pokemon

http://localhost:8080/api/getAllPokemon

sample pokemon:
```json
        {
            "id": 1,
            "teamId": null,
            "pokedex": 1,
            "name": "{\"english\":\"Bulbasaur\",\"japanese\":\"フシギダネ\",\"chinese\":\"妙蛙种子\",\"french\":\"Bulbizarre\"}",
            "type": "[\"Grass\",\"Poison\"]",
            "base": "{\"HP\":45,\"Attack\":49,\"Defense\":49,\"Sp. Attack\":65,\"Sp. Defense\":65,\"Speed\":45}",
            "createdAt": "2022-07-20T20:22:03.000Z",
            "updatedAt": "2022-07-20T20:22:03.000Z"
        },
```
### GET: GET_TEAM_BY_ID

http://localhost:8080/api/team/3


Get team by ID

```json
{
    "foundTeam": {
        "id": 1,
        "teamName": "Really Good Team Name",
        "pokemon": "[2]",
        "createdAt": "2022-07-20T20:22:03.000Z",
        "updatedAt": "2022-07-20T20:29:07.000Z"
    },
    "success": true,
    "message": "Team by Id returned"
}
```

### GET: GET_POKEMON_BY_POKEDEX

http://localhost:8080/api/pokemon/2

get pokemon by pokedex

```json
{
    "foundPokemon": [
        {
            "id": 20,
            "teamId": null,
            "pokedex": 20,
            "name": "{\"english\":\"Raticate\",\"japanese\":\"ラッタ\",\"chinese\":\"拉达\",\"french\":\"Rattatac\"}",
            "type": "[\"Normal\"]",
            "base": "{\"HP\":55,\"Attack\":81,\"Defense\":60,\"Sp. Attack\":50,\"Sp. Defense\":70,\"Speed\":97}",
            "createdAt": "2022-07-20T20:22:03.000Z",
            "updatedAt": "2022-07-20T20:22:03.000Z"
        }
    ],
    "success": true,
    "message": "Pokemon by pokedex returned"
}
```

### DELETE : DELETE_TEAM

http://localhost:8080/api/delete/team/2

delete a team by id

```json
{
    "deletedTeam": {
        "id": 2,
        "teamName": "Really Good Team Name",
        "pokemon": "[]",
        "createdAt": "2022-07-20T20:22:03.000Z",
        "updatedAt": "2022-07-20T20:22:03.000Z"
    },
    "success": true,
    "message": "Team deleted"
}
```

### POST: CREATE_NEW_TEAM

http://localhost:8080/api/create/team

create team - adds name 

Body:
```json
{
    "teamName" : "TEST TEAM NAME"
}
```

```json
{
    "newTeam": {
        "id": 3,
        "teamName": "TEST TEAM NAME",
        "updatedAt": "2022-07-20T20:37:17.894Z",
        "createdAt": "2022-07-20T20:37:17.894Z"
    },
    "success": true,
    "message": "New team create"
}
```

### PUT: DELETE_POKEMON_OFF_TEAM

http://localhost:8080/api/delete/team/1/pokemon/10

delete pokemon off team

```json
{
    "teamUpdated": {
        "id": 1,
        "teamName": "Really Good Team Name",
        "pokemon": [
            5
        ],
        "createdAt": "2022-07-20T20:22:03.000Z",
        "updatedAt": "2022-07-20T20:38:18.117Z"
    },
    "success": true,
    "message": "Pokemon deleted"
}
```

### PUT: ADD_POKEMON_TO_TEAM

http://localhost:8080/api/add-pokemon/10/team/1

Add pokemon to team

```json
{
    "updatedTeam": {
        "id": 1,
        "teamName": "Really Good Team Name",
        "pokemon": [
            5,
            30
        ],
        "createdAt": "2022-07-20T20:22:03.000Z",
        "updatedAt": "2022-07-20T20:38:37.304Z"
    },
    "success": true,
    "message": "Pokemon Added"
}
```

### PUT: UPDATE_TEAM_NAME

http://localhost:8080/api/update/team-name/1

update team name

body:
```json
{
  "teamName": "TEST NEW TEAM NAME"
}
```

```json
{
    "updatedTeam": {
        "id": 1,
        "teamName": "TEST NEW TEAM NAME",
        "pokemon": "[5,30]",
        "createdAt": "2022-07-20T20:22:03.000Z",
        "updatedAt": "2022-07-20T20:38:54.750Z"
    },
    "sucess": true,
    "message": "Updated team name"
}
```
### PUT: ADD_TEAMID_TO_POKEMON

http://localhost:8080/api/add-team-id/1/pokemon/2

NOT COMPLETE YET