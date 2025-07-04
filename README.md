# 🧙‍♂️ SpellAuth – API Node.js avec JWT

SpellAuth est une API REST conçue avec Node.js et Express, permettant une authentification simple via JWT. Le projet repose sur une seule table `users` et propose un système sécurisé d’inscription, de connexion et d’accès au profil utilisateur.

---

## ⚡ Fonctionnalités

- Authentification avec token JWT  
- Inscription et connexion sécurisées  
- Accès au profil via une route protégée  
- Hachage de mot de passe avec bcrypt  
- Middleware de vérification de token  

---

## 🔗 Routes principales

| Méthode | Route       | Description                          |
|---------|-------------|------------------------------------|
| POST    | `/register` | Créer un compte                    |
| POST    | `/login`    | Se connecter et recevoir un token |
| GET     | `/profile`  | Voir son profil (token requis)     |

---

## Exemple de réponse `/profile`

```json
{
  "id": 1,
  "email": "harry@poudlard.fr"
}
```

---

## ✨ Notes

Ce projet est réalisé à des fins pédagogiques, dans le cadre d’un exercice sur l’authentification API.  
Il repose sur une seule table `users` et peut servir de base pour d’autres projets Node.js sécurisés.
