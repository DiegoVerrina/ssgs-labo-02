# Labo-String

**Labo-String** è una Command-Line Interface (CLI) sviluppata in Node.js per la manipolazione e l’analisi di stringhe. Il progetto offre numerose funzionalità utili sia in ambito didattico che pratico, facilitando operazioni comuni sulle stringhe direttamente da terminale.

## Sommario

- [Descrizione](#descrizione)
- [Funzionalità](#funzionalità)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Esempi di Comando](#esempi-di-comando)
- [Struttura del Progetto](#struttura-del-progetto)
- [Testing](#testing)
- [Requisiti](#requisiti)
- [Contributi](#contributi)
- [Licenza](#licenza)

---

## Descrizione

Labo-String nasce come progetto didattico per esercitarsi con Node.js e la realizzazione di strumenti CLI. La sua modularità e semplicità lo rendono facilmente estendibile con nuove funzionalità.

Le operazioni offerte dal tool sono utili per chiunque debba manipolare o analizzare stringhe in modo rapido, senza ricorrere a IDE o editor di testo, ma semplicemente utilizzando il terminale.

## Funzionalità

Il progetto mette a disposizione i seguenti comandi:

- **Inverti**: Restituisce la versione invertita di una stringa.
- **Palindromo**: Verifica se la stringa fornita è palindroma (uguale letta da sinistra a destra e viceversa).
- **Tronca**: Tronca la stringa a una lunghezza massima specificata, eventualmente aggiungendo un suffisso.
- **Conta caratteri**: Conta le occorrenze di ogni carattere presente in una stringa.
- **Conta parole**: Conta il numero di parole presenti in una stringa.
- **Rimuovi spazi**: Elimina tutti gli spazi dalla stringa.
- **Uppercase/Lowercase**: Converte la stringa tutta in maiuscolo o minuscolo.
- **Regex match**: Permette di verificare se una stringa soddisfa una determinata espressione regolare (regex).

*Nota: alcune funzionalità potrebbero essere in fase di sviluppo ed evoluzione.*

## Installazione

Assicurati di avere [Node.js](https://nodejs.org/) (versione 14.x o superiore) installato sul tuo sistema.

1. Clona il repository:

    ```bash
    git clone https://github.com/DiegoVerrina/ssgs-labo-02.git
    cd ssgs-labo-02
    ```

2. Installa le dipendenze:

    ```bash
    npm install
    ```

## Utilizzo

Puoi eseguire la CLI tramite il comando:

```bash
npm start -- <comando> [opzioni]
```
Oppure direttamente con Node.js:

```bash
node src/index.js <comando> [opzioni]
```
Per vedere l’elenco completo dei comandi e delle opzioni disponibili:

```bash
npm start -- --help
```
oppure

```bash
node src/index.js --help
```
Esempi di Comando
Invertire una stringa

```bash
npm start -- inverti "Ciao mondo"
```
# Output: "odnom oaiC"
Verificare se una stringa è palindroma

```bash
npm start -- palindromo "anna"
```
# Output: "La stringa è palindroma"
Troncare una stringa a 5 caratteri

```bash
npm start -- tronca "programmazione" --max 5 --suffisso "..."
```
# Output: "progr..."
Contare le occorrenze dei caratteri

```bash
npm start -- conta-caratteri "test"
```
# Output: "t: 2, e: 1, s: 1"
Contare le parole in una stringa

```bash
npm start -- conta-parole "Questo è un test"
```
# Output: "4"
Match con regex

```bash
npm start -- regex-match "abc123" --regex "^[a-z]+[0-9]+$"
```
# Output: "true"

## Testing
Il progetto include una suite di test automatizzati per verificare il corretto funzionamento delle varie funzionalità della CLI. I test sono scritti utilizzando Jest (o un altro framework, se diverso: verifica nella cartella package.json o nella directory tests).

Per eseguire i test in locale:

```bash
npm test
```
Assicurati che tutte le dipendenze siano installate (npm install) prima di lanciare i test.

## Pipeline CI
Il repository utilizza GitHub Actions per l’integrazione continua (CI). Ad ogni push o pull request sulla branch principale, viene avviata una pipeline automatica che esegue i seguenti step:

Installazione delle dipendenze: viene eseguito npm install.
Linting e controllo del codice: se configurato, viene effettuato il controllo dello stile e della qualità del codice.
Esecuzione dei test: vengono lanciati tutti i test automatici per assicurarsi che nessuna funzionalità sia stata compromessa.
Questo processo garantisce che il codice sia sempre stabile e funzionante, riducendo il rischio di introdurre bug o regressioni.

Puoi consultare lo stato della pipeline CI nella sezione "Actions" del repository su GitHub.

## Segnalazione Bug e Issue
Se riscontri un bug, un comportamento inatteso o desideri proporre una nuova funzionalità, ti invitiamo ad aprire una issue su GitHub. Segui questi semplici passaggi:

Vai alla sezione Issues del repository.
Clicca su “New issue”.
Descrivi dettagliatamente il problema, includendo se possibile:
Comando utilizzato e output ricevuto
Sistema operativo e versione di Node.js
Passaggi per riprodurre l’errore
Le segnalazioni sono fondamentali per migliorare il progetto! Puoi anche consultare le issue aperte e chiuse per vedere se il problema è già stato segnalato o risolto.
