# 📘 JavaScript Cheatsheet

## 📊 Commandes et mots-clés de base

| Commande / Mot-clé | Description | Exemple |
|--------------------|-------------|---------|
| `let` | Déclare une variable modifiable | `let age = 25;` |
| `const` | Déclare une constante (valeur fixe) | `const PI = 3.14;` |
| `var` | Ancienne façon de déclarer une variable | `var name = "Matthias";` |
| `if ... else` | Teste une condition | `if (age >= 18) { console.log("Adult"); } else { console.log("Minor"); }` |
| `switch` | Teste plusieurs cas | `switch(day) { case 1: console.log("Monday"); break; }` |
| `for` | Boucle avec compteur | `for (let i = 0; i < 5; i++) { console.log(i); }` |
| `while` | Boucle tant qu’une condition est vraie | `while (x < 10) { x++; }` |
| `do ... while` | Boucle exécutée au moins une fois | `do { x++; } while (x < 10);` |
| `function` | Déclare une fonction | `function greet() { console.log("Hello!"); }` |
| `return` | Renvoie une valeur depuis une fonction | `function add(a,b){ return a+b; }` |
| `console.log()` | Affiche dans la console | `console.log("Debug message");` |
| `prompt()` | Demande une saisie utilisateur | `let name = prompt("Enter your name:");` |
| `alert()` | Affiche une boîte de dialogue | `alert("Welcome!");` |
| `Number()` | Convertit en nombre | `let n = Number("42");` |
| `String()` | Convertit en texte | `let s = String(42);` |
| `[]` | Tableau (liste de valeurs) | `let fruits = ["apple","banana","pear"];` |
| `{}` | Objet (ensemble de propriétés) | `let car = {brand:"Toyota", year:2020};` |
| `new Date()` | Crée une date | `let today = new Date();` |
| `++` | Incrémente de 1 | `let i=0; i++; // i=1` |
| `--` | Décrémente de 1 | `let i=5; i--; // i=4` |

---

## ➕ Opérateurs mathématiques

| Opérateur | Description | Exemple |
|-----------|-------------|---------|
| `+` | Addition ou concaténation | `5 + 3 // 8` ; `"Hello" + " World"` |
| `-` | Soustraction | `10 - 4 // 6` |
| `*` | Multiplication | `6 * 7 // 42` |
| `/` | Division | `20 / 5 // 4` |
| `%` | Modulo (reste) | `10 % 3 // 1` |
| `**` | Puissance | `2 ** 3 // 8` |

---

## 🔎 Opérateurs de comparaison

| Opérateur | Description | Exemple |
|-----------|-------------|---------|
| `===` | Égalité stricte (valeur + type) | `42 === "42" // false` |
| `==` | Égalité en valeur | `42 == "42" // true` |
| `!==` | Différent strict | `42 !== "42" // true` |
| `!=` | Différent en valeur | `42 != "42" // false` |
| `>` | Supérieur à | `7 > 5 // true` |
| `<` | Inférieur à | `3 < 8 // true` |
| `>=` | Supérieur ou égal | `5 >= 5 // true` |
| `<=` | Inférieur ou égal | `4 <= 6 // true` |

---

## ⚙️ Opérateurs logiques

| Opérateur | Description | Exemple |
|-----------|-------------|---------|
| `&&` | ET logique | `(5 > 2 && 10 > 8) // true` |
| `||` | OU logique | `(5 > 10 || 3 < 8) // true` |
| `!` | NON logique | `!(5 > 2) // false` |

