<h1 align="center">Site de mariage</h1>

<div align="center"><img height="150" src="https://i31.servimg.com/u/f31/13/52/99/79/weddin11.png"></div>

## 📝 Sommaires

- [Présentation du projet](#présentation)
- [Aperçu du projet](#projet)
- [Pour un travail en local](#utilisation)

## 💭 Petit mot de présentation <a name = "présentation"></a>

J'ai mis en place un site web pour mon mariage à detination de mes invités, afin de leurs fournir différentes informations pour le jours J.
J'ai voulu faire ceci afin de mettre en application ceux que j'ai acquis a travers ma reconversion tout en atant carte blanche sur les éléments à utilisé. Ce qui ma permis de tester de nouvelle chose et donc d'agrandir mes connaissances et compétences.

---

### Langages à utilisés

- <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/logo_h11.png"> HTML/CSS - ainsi que le prépossesseur de CSS : Sass <img height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png">

- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"> Javascript

#### Les plateformes / frameworks / librairies

- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"> React

- <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/ant-de10.png"> Ant-design

- <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/images10.png"> EmailJS

---

## ⛏️ Aperçu du projet <a name = "projet"></a>

Objectif : Création d'un site web de mariage.

Utilisation : <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/logo_h11.png"> <img height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"> <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"> <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"> <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/ant-de10.png"> <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/images10.png">

Aperçu : 

- Lien du site : [https://union-nd-mariage.netlify.app/](https://union-nd-mariage.netlify.app/)

---

## :gear: Pour un travail en local <a name = "utilisation"></a>

Cloner le dépôt git du projet via un éditeur de code ou le télécharger puis le décompresser sur votre machine. Une fois le dossier ouvert avec un éditeur de code (comme VSCode), ouvrir et saisir dans le terminal les commandes suivante :
- "npm install"

puis pour le lancer au local saisir :
- "npm start"
une page internet s'ouvrira sur le navigateur par defaut avec le site à l'adresse: http://localhost:3000/

Pour l'utilisation des Formulaire avec EmailJS : 
- Avoir un compte EmailJS
- Créer 2 templates pour le formulaire contact et de confirmation.
  - pour le formulaire de contact il faut récupérer les données suivante : {{ message }}, {{ email }}, {{ phone }}, {{ from_name }}.
  - pour le formulaire de confirmation i lfaut récupérer les données suivante : {{from_name}}, {{ status }}, {{ adults }}, {{ child }}, {{message}}.
- créer un dossier ".env" et y stocké les variables correspondante suivante : 
  - " REACT_APP_ACCESS_JSDEV =" + votre clé serviceID
  - " REACT_APP_TEMP_CONTACTDEV =" + votre clé templateID
  - " REACT_APP_TEMP_CONFIRMDEV =" + votre clé templateParams
  - " REACT_APP_ID_USERDEV =" + votre clé publicKey
