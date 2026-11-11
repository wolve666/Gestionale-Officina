<p align="center">
  <img src="logo.png" alt="E-Duck Garage" width="260">
</p>

<h1 align="center">Gestionale EDG</h1>

<p align="center">
  Il gestionale di <b>E-Duck Garage</b>, officina di riparazione e modifica monopattini elettrici.<br>
  Clienti, lavori, preventivi di vendita e report delle consegne, sincronizzati in tempo reale su PC e telefono.
</p>

<p align="center">
  <img alt="Versione" src="https://img.shields.io/badge/versione-v12-F2B100">
  <img alt="Tipo" src="https://img.shields.io/badge/app-PWA%20installabile-171C21">
  <img alt="Dati" src="https://img.shields.io/badge/dati-Firebase%20Firestore-FFCA28">
  <img alt="Lingua" src="https://img.shields.io/badge/lingua-italiano-2A78D6">
</p>

---

## Indice

- [Cosa fa](#cosa-fa)
- [Funzioni](#funzioni)
  - [Lavori in officina](#lavori-in-officina)
  - [Clienti e monopattini](#clienti-e-monopattini)
  - [Contatti e WhatsApp](#contatti-e-whatsapp)
  - [Preventivi di vendita](#preventivi-di-vendita)
  - [Report consegne](#report-consegne)
  - [Impostazioni](#impostazioni)
  - [App e dispositivi](#app-e-dispositivi)
- [Installare l'app](#installare-lapp)
- [Come funziona dietro le quinte](#come-funziona-dietro-le-quinte)
- [File del progetto](#file-del-progetto)
- [Configurazione di Firebase](#configurazione-di-firebase)
- [Pubblicare un aggiornamento](#pubblicare-un-aggiornamento)
- [Backup e sicurezza dei dati](#backup-e-sicurezza-dei-dati)
- [Risoluzione dei problemi](#risoluzione-dei-problemi)
- [Storico delle versioni](#storico-delle-versioni)

---

## Cosa fa

Gestionale EDG è una web app installabile (PWA) pensata per il lavoro di tutti i giorni in officina:

- tiene l'anagrafica dei clienti e dei loro monopattini;
- segue ogni lavoro dall'apertura alla consegna, con lavorazioni, acconti e saldo;
- calcola i preventivi di vendita con IVA, spese, sconti e guadagno, e stampa il foglio per il cliente;
- mostra ricavi giornalieri, mensili e annuali, confrontati con l'anno prima;
- sincronizza tutto in tempo reale tra PC dell'officina e telefoni, e funziona anche senza connessione.

L'accesso è con account Google e solo gli indirizzi autorizzati vedono i dati.

---

## Funzioni

### Lavori in officina

| Funzione | Descrizione |
|---|---|
| **Bacheca dei lavori** | La pagina principale mostra tre colonne: 🟡 **Lavori aperti**, 🔴 **Da consegnare**, 🟢 **Consegnati questa settimana**. |
| **Stati con date automatiche** | Spuntando lo stato si impostano da sole le date di fine lavoro e di consegna. |
| **Totale da incassare** | Sulla colonna "Da consegnare" compare la somma ancora da riscuotere. |
| **Consegnati della settimana** | I consegnati spariscono ogni lunedì dalla bacheca e restano consultabili nel report. |
| **Ordine per data** | Pulsante per scegliere "più recenti in alto" o "più vecchi in alto". La scelta viene ricordata. |
| **Anteprima rapida** | Sul PC tenendo il mouse fermo 1 secondo su una scheda, sul telefono con un tocco: la scheda si espande e mostra lavorazioni, acconti e saldo. Un secondo tocco o un clic apre la scheda del cliente. |

### Clienti e monopattini

| Funzione | Descrizione |
|---|---|
| **Barra di ricerca fissa** | Cerca per **nome**, **telefono** o **targa**. Se il cliente non esiste, propone di inserirlo subito. |
| **Controllo duplicati** | Il numero di telefono è la chiave: lo stesso numero non può essere registrato due volte, anche se scritto con +39, spazi o trattini. |
| **Clienti senza nome** | Si può registrare un cliente anche solo con il numero di telefono. |
| **Più monopattini per cliente** | Ogni monopattino ha la sua scheda a tab, con modello, **targa**, note, lavorazioni e acconti. |
| **Ricerca per targa** | Basta una parte della targa, maiuscola o minuscola: si apre direttamente il monopattino giusto. |
| **Acconti e saldo** | Registro degli acconti con data e nota; alla consegna il residuo viene saldato in automatico e la scheda passa a "Saldato ✓". |

### Contatti e WhatsApp

| Funzione | Descrizione |
|---|---|
| **Chiama** | Apre il telefono con il numero del cliente già composto (solo su telefono). |
| **WhatsApp** | Apre la chat con il cliente, anche se il numero non è in rubrica. Sul PC usa WhatsApp Desktop o Web. |
| **Avvisa: è pronto** | Per i monopattini da consegnare apre WhatsApp con un messaggio già scritto: nome del cliente, modello e saldo da pagare. Il testo si personalizza nelle Impostazioni. |

I numeri vengono normalizzati da soli: se manca il prefisso viene aggiunto +39.

### Preventivi di vendita

| Funzione | Descrizione |
|---|---|
| **Acquisto** | Prezzo dal fornitore con o senza IVA e aliquota a scelta (22%, 10%, 4%, 0%). |
| **Spese extra** | Spedizione, manodopera (ore × tariffa), accessori e ricambi, voci libere. |
| **Vendita al cliente** | Prezzo del monopattino più altre voci addebitate al cliente, come consegna, accessori o messa su strada. |
| **Due modi di calcolo** | *Ho già il prezzo* calcola il guadagno; *Trova il prezzo* parte da guadagno in €, margine % o ricarico % e arrotonda il prezzo finale. |
| **Sconto** | In percentuale, in euro oppure dal prezzo finale concordato (lo sconto viene calcolato da solo). |
| **Riepilogo** | Guadagno netto, margine, ricarico, prezzo di pareggio, IVA da versare e una barra che mostra costi, guadagno e IVA. |
| **Clienti fuori anagrafica** | Si può intestare un preventivo a un cliente non registrato e aggiungerlo ai clienti in un secondo momento. |
| **Foglio per il cliente** | Pagina A4 stampabile o salvabile in PDF con logo, dati dell'officina, descrizione, fino a 2 foto, cosa è incluso, prezzo finale, sconto e firma per accettazione. Costi e guadagni non compaiono. |
| **Numerazione** | Ogni preventivo salvato riceve un numero progressivo (es. 2026/001) e uno stato: Bozza, Inviato, Accettato, Rifiutato. |

### Report consegne

| Funzione | Descrizione |
|---|---|
| **Viste Giorno / Mese / Anno** | Navigazione con frecce e pulsante "Oggi". |
| **Calendario** | Ogni giorno mostra incasso e numero di lavori consegnati, con il colore più intenso nei giorni migliori. |
| **Consegne giorno per giorno** | Elenco raggruppato per data; un tocco apre il lavoro. |
| **Indicatori** | Ricavi del periodo, lavori consegnati, media per lavoro e confronto con lo stesso periodo dell'anno prima. |
| **Andamento mensile** | Grafico a barre dei ricavi mese per mese, anno corrente contro anno precedente, con tabella dei valori. |

> I ricavi sono il totale delle lavorazioni di ogni monopattino, contato nel giorno della consegna.

### Impostazioni

- **Messaggio "Avvisa: è pronto"**: testo personalizzabile con i campi `{nome}`, `{monopattino}`, `{saldo}`, `{importo}`, `{officina}` e anteprima in stile WhatsApp.
- **Dati dell'officina**: nome, indirizzo, telefono, email, partita IVA e logo, usati sui preventivi e nei messaggi.

### App e dispositivi

- **Installabile** su PC (Chrome/Edge) e telefono (Android e iPhone) con il pulsante **Installa app**.
- **Sincronizzazione in tempo reale** tra tutti i dispositivi, con indicatore di stato: *Sincronizzato*, *Salvataggio…*, *Offline*.
- **Funziona offline**: i dati restano sul dispositivo e partono appena torna la connessione.
- **Tasto Indietro di Android** gestito pagina per pagina: chiude l'app solo dalla pagina principale.
- **Versione sempre visibile** accanto al titolo; quando ne esce una nuova l'etichetta diventa gialla e con un tocco l'app si aggiorna.
- **Tema** automatico, chiaro o scuro.
- **Layout adattato al telefono**, con barra fissa del guadagno nei preventivi.

---

## Installare l'app

**Indirizzo:** `https://<utente-github>.github.io/officina/`

| Dispositivo | Come installarla |
|---|---|
| **PC (Chrome / Edge)** | Apri l'indirizzo e premi **Installa app** in alto, oppure l'icona di installazione nella barra degli indirizzi. |
| **Android** | Apri l'indirizzo in Chrome → menu **⋮** → **Installa app**. |
| **iPhone / iPad** | Apri l'indirizzo in Safari → **Condividi** → **Aggiungi alla schermata Home**. |

Al primo avvio si entra con **Accedi con Google**. Se il dispositivo contiene dati del vecchio gestionale in locale, compare il pulsante **Carica nel cloud** per trasferirli.

---

## Come funziona dietro le quinte

| Parte | Tecnologia |
|---|---|
| Interfaccia | Un unico file `index.html` con HTML, CSS e JavaScript, senza framework e senza passaggi di compilazione |
| Database | **Firebase Cloud Firestore**, con cache locale per l'uso offline |
| Accesso | **Firebase Authentication** con account Google |
| Hosting | **GitHub Pages** |
| App installabile | Web App Manifest + Service Worker (`sw.js`) |
| Caratteri | Barlow, Barlow Condensed e JetBrains Mono (Google Fonts) |

**Struttura dei dati in Firestore**

```
clienti/{id}              → cliente, con i suoi monopattini, lavorazioni e acconti
preventivi/{id}           → preventivo di vendita (foto incluse, compresse)
impostazioni/officina     → dati dell'officina, logo, testo del messaggio WhatsApp
```

Sul singolo dispositivo restano solo le preferenze locali: tema e ordine dei lavori.

---

## File del progetto

| File | A cosa serve |
|---|---|
| `index.html` | L'intera applicazione |
| `sw.js` | Service worker: installazione, uso offline e aggiornamenti |
| `manifest.webmanifest` | Nome, colori e icone dell'app installata |
| `logo.png` | Logo E-Duck Garage (schermata di accesso) |
| `icon-192.png`, `icon-512.png` | Icone dell'app (angoli arrotondati, fondo trasparente) |
| `icon-maskable-512.png` | Icona per Android, con margine per il ritaglio circolare |
| `apple-touch-icon.png` | Icona per iPhone e iPad |
| `favicon.png` | Icona della scheda del browser |
| `README.md` | Questo documento |

---

## Configurazione di Firebase

La configurazione del progetto Firebase si trova in `index.html`, nella riga `FB_CONFIG`. Questi valori non sono segreti: identificano il progetto, mentre i dati sono protetti dalle regole di Firestore.

**Servizi da attivare nella console di Firebase**

1. **Firestore Database**, in modalità produzione.
2. **Authentication → Google** come metodo di accesso.
3. **Authentication → Impostazioni → Domini autorizzati**: aggiungere `<utente-github>.github.io`.

**Regole di Firestore (schema)**

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function autorizzato() {
      return request.auth != null
        && request.auth.token.email_verified == true
        && request.auth.token.email.lower() in [
          'email-autorizzata-1@gmail.com',
          'email-autorizzata-2@gmail.com'
        ];
    }
    match /{document=**} {
      allow read, write: if autorizzato();
    }
  }
}
```

Per autorizzare un collaboratore basta aggiungere la sua email alla lista e premere **Pubblica**. Le email reali non sono riportate qui perché il repository è pubblico.

---

## Pubblicare un aggiornamento

1. Carica il nuovo `index.html` nel repository con **Add file → Upload files → Commit changes**.
2. Apri `sw.js` con la matita e alla seconda riga porta il numero alla nuova versione, ad esempio `officina-v12` → `officina-v13`. Il numero deve essere lo stesso di `APP_VERSION` in `index.html`.
3. Aspetta la spunta verde nella scheda **Actions** (1–2 minuti).
4. Sui dispositivi compare l'etichetta gialla **↻ vXX**: un tocco e l'app si aggiorna.

> Alcuni browser bloccano il download dei file `.js`: in quel caso `sw.js` si modifica direttamente su GitHub con la matita.

---

## Backup e sicurezza dei dati

- I dati sono su Firestore e sincronizzati su tutti i dispositivi autorizzati.
- **Scarica backup** (pagina principale) salva un file `.json` con clienti, preventivi e impostazioni. È consigliato farlo una volta a settimana.
- **Ripristina backup** sostituisce i dati nel cloud con quelli del file. Accetta anche i backup del vecchio gestionale locale.
- Se due persone modificano lo stesso cliente nello stesso istante, resta l'ultima modifica salvata.

---

## Risoluzione dei problemi

| Problema | Soluzione |
|---|---|
| "Configurazione mancante" | Su GitHub c'è un `index.html` senza `FB_CONFIG`: ricarica il file giusto (cerca `61aa2` nel file per verificarlo). |
| "Account non autorizzato" | L'email usata non è nelle regole di Firestore, oppure è scritta male. Controlla virgolette e virgole e premi **Pubblica**. |
| Errore `auth/unauthorized-domain` | Manca `<utente-github>.github.io` nei domini autorizzati di Authentication. |
| L'app installata dice "Offline" | Chiudi la scheda dell'app aperta in Chrome e riapri l'app installata. |
| Non vedo l'ultima versione | Tocca l'etichetta gialla della versione, oppure premi **Ctrl+F5** sul PC. |
| Icona vecchia sul PC | Disinstalla l'app (menu ⋮ → Disinstalla) e installala di nuovo. I dati restano nel cloud. |
| Download di `sw.js` bloccato | Modifica o crea il file direttamente su GitHub (**Add file → Create new file**). |

---

## Storico delle versioni

| Versione | Novità |
|---|---|
| **v12** | Pagina **Impostazioni**: testo del messaggio WhatsApp personalizzabile con anteprima, dati e logo dell'officina. Icone con angoli arrotondati. |
| **v11** | Titolo **Gestionale EDG**; pulsante **Avvisa: è pronto** con messaggio WhatsApp precompilato; su PC solo pulsanti WhatsApp. |
| **v10** | Pulsanti **Chiama** e **WhatsApp** nella scheda cliente e nell'anteprima dei lavori. |
| **v9** | Versione sempre visibile accanto al titolo, con avviso e aggiornamento in un tocco. |
| **v8** | Campo **Targa** per ogni monopattino e ricerca per targa. |
| **v7** | Anteprima dei lavori con il tocco sul telefono. |
| **v6** | Tasto **Indietro** di Android gestito dentro l'app. |
| **v5** | Layout ottimizzato per telefono e barra fissa del guadagno nei preventivi. |
| **v1–v4** | Passaggio al cloud: Firebase, accesso Google, sincronizzazione in tempo reale, uso offline, app installabile con icona E-Duck Garage. |
| **Prima del cloud** | Gestionale locale: clienti, lavori, acconti, preventivi con sconto e foglio stampabile, report consegne con calendario e grafico, tema chiaro/scuro. |

---

<p align="center">
  Realizzato per <b>E-Duck Garage</b>
</p>
