# GET:ITJOB to platforma z ofertami pracy z branży IT.

![image](https://github.com/Idzikowski20/GETITJOB/assets/143029584/07b1bd87-0c0c-404d-8be0-00f069a48ceb)
![image](https://github.com/Idzikowski20/GETITJOB/assets/143029584/30223eb7-d273-48e2-b9b3-004754543d15)

Na stronie możemy wyszukiwać ofert za pomocą filtrów; Wyszukiwanie ręcznę lub po formie pracy i umowie.

## Wejście w oferte generuje nową stronę /job/ID

![image](https://github.com/Idzikowski20/GETITJOB/assets/143029584/d3484ce2-97e4-4f5f-be1e-b5b83a88bd5b)
Aplikacja wykrywa "ID" oferty z pliku json a następnie tworzy podstronę z ścieżką /Job/ID
I zaciąga dane jak opis oferty,stanowisko,wynagrodzenie. 


## Logowanie i rejestracja.

![image](https://github.com/Idzikowski20/GETITJOB/assets/143029584/b72ce130-7df8-474d-8a7e-45521bf6e6eb)

Po założeniu konta użytkownik jest przenoszony do /AdminPanel. Jeżeli wróci na stronę głowną to Navigacja będzię zaaktualizowana.
Użytkownik niezalogowany nie może wejść ręcznie do /AdminPanel - skrypt sprawdza czy (!user) jest zalogowany jeśli nie to automatycznie przekierowywuje do /login.
Uzytkownik zalogowany nie może przejść do /Login , ponieważ jest już zalogowany. Tak samo tyczy się to /register.
Jeśli zamkniemy okienko i wrocimy ponownie to po kliknięciu "zaloguj" skrypt sprawdza czy uzytkownik się wylogował przed opuszczeniem,jeśli nie to zostanie automatycznie zalogowany.
Jeśli tak to zostanie przeniesiony do /login.

## TODO LISt
1. Dodanie AdminPanelu dla testów, żeby każdy mógł założyc konto pracodawcy wejść i dodać oferte pracy.
2. Zapisywanie danych do aplikowania na stanowisko pracy - Wpisujemy swoje dane i wgrywamy plik CV.

