# Debugging in JavaScript

Jadi ada beberapa tipe dari error yang bisa terjadi ketika kita ngoding JavaScript.

- Syntax Errors (most common)
- Runtime Errors
- Logical Errors (most difficult to find)

## Syntax Errors

Kesalahan dalam penulisan syntax yang dapat menimbulkan error pada saat program dijalankan. Misalnya seperti ketika kita salah memanggil `function`, `variabel`, atau `method`, bisa juga salah meletakkan semicolon pada codes kita.

Contoh dari syntax error

```javascript
let exObj = { name; "Rick" }
```

```javascript
const ourFunc = () => {
    console.log("hello world")

// missing ending } of the function
```

## Runtime Errors

Runtime error baru terlihat ketika compile/menjalankan program, biasa disebut juga sebagai `exceptions`. Misalnya ketika kita memanggil `function` yang belum di deklarasikan.

Bisa kita handle misalkan dengan penulisan `try catch`. Mayoritas dari runtime error itu seperti `TypeError`, `RangeError`, dll.

```javascript
// calling not declared function
doSomeStuff();
```

## Logical Errors

Error di logika. Misalkan kita buat sebuah algoritma atau elemen logikal yang terstruktur rapi, secara syntax juga benar, tapi secara flow logic ada yang salah atau kurang tepat.

Anggap ada film Avengers, secara alur happy ending harusnya si Loki kalah dan di tangkap. Sekarang bayang worse scenario dimana si Loki menang dan mengalahkan semua anggota Avengers, disini letak logika yang error.

# Try to solve this

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong
