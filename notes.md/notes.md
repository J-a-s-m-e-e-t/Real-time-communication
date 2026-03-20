[^\s@]+
Means one or more characters that are NOT:
space (\s) and @

| Symbol | Meaning                 |
| ------ | ----------------------- |
| `.`    | any character           |
| `*`    | zero or more            |
| `+`    | one or more             |
| `?`    | optional                |
| `^`    | start of string         |
| `$`    | end of string           |
| `[]`   | match characters inside |
| `\d`   | digit                   |
| `\s`   | whitespace              |

const phoneRegex = /^\d{10}$/;
Matches only 10 digit phone number ex->9876543210
