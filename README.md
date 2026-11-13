# Gestionale EDG — E-Duck Garage

Gestionale per l'officina di riparazione e modifica monopattini **E-Duck Garage**.
È un'app web installabile (PWA) pubblicata su GitHub Pages. I dati sono salvati su Firebase (Firestore) e sincronizzati in tempo reale su PC e telefoni.

Versione attuale: **v15**. Il numero di versione è visibile accanto al nome dell'app: toccandolo si verifica e si installa l'aggiornamento.

## Accesso
- Accesso con account Google. Possono entrare solo gli account autorizzati nelle regole di Firestore.
- Funziona anche offline: le modifiche si sincronizzano al ritorno della connessione.

## Funzioni principali

### Home – bacheca lavori
- **Lavori aperti** (giallo), **Da consegnare** (rosso), **Consegnati questa settimana** (verde). I consegnati spariscono dalla home ogni settimana e restano nel report.
- Totale **da incassare** calcolato sui lavori da consegnare.
- Ogni scheda mostra modello, cliente, telefono, targa, data, importo da saldare e l'icona del **caricatore** se è stato lasciato in officina.
- Tocco o passaggio del mouse: si apre il dettaglio con lavorazioni, totale, acconti e tasti Chiama / WhatsApp.
- Ordinamento dal più vecchio o dal più recente.

### Da avvisare
Sezione con grafica da blocco note per i clienti da ricontattare.
- **PC**: fascia in basso, larga quanto le tre colonne dei lavori.
- **Telefono**: tra "Lavori aperti" e "Da consegnare", chiusa di base, si apre con un tocco.
- **Spostamento sezioni (telefono)**: tieni premuto sul titolo di una sezione e trascinala. L'ordine resta salvato sul dispositivo.

Ogni avviso è strutturato come una futura lavorazione:
1. **Cliente**: si cerca per nome, telefono o targa. Se non esiste, l'app propone di aggiungerlo, con lo stesso controllo duplicati della barra di ricerca.
2. **Monopattino**: uno di quelli del cliente, oppure un nuovo modello.
3. **Lavorazione**: il testo dell'avviso.
4. **Importo** previsto.

Il ciclo di un avviso:
- **✓ Avvisato**: la scheda resta nella sezione, barrata come una voce spuntata sul foglio.
- **Diventa lavorazione**, sugli avvisi barrati. Si sceglie se creare un **nuovo lavoro aperto** o **aggiungerlo a un lavoro esistente**. Il testo diventa la riga di lavorazione e l'importo il suo costo, quindi entra nel prezzo da pagare. Al termine si apre la scheda cliente.
- **Archivia**: toglie l'avviso dalla sezione senza creare lavori.
- Tutti gli avvisi restano nello **storico "Avvisi"** della scheda cliente, con stato ed esito.

### Clienti
- Barra fissa in alto: ricerca per nome, telefono o targa. Se il cliente non esiste, propone l'inserimento.
- Controllo duplicati sul numero di telefono. È possibile registrare clienti con solo il telefono.
- Scheda cliente con più monopattini a tab. Per ognuno ci sono targa, note, flag caricatore, fasi del lavoro con date automatiche, lavorazioni con data e costo, acconti e saldo ("da saldare" / "Saldato").

### Preventivi di vendita
- Calcolatore preventivi con prezzo monopattino e voci aggiuntive separate.
- Sconto dal prezzo finale (percentuale automatica) o con soglia.
- Clienti anche fuori anagrafica, da registrare in seguito.
- Scheda stampabile per il cliente con prezzi e foto.

### Report consegne
Calendario di giorni, mesi e anni con ricavi e confronto con l'anno precedente.

### Impostazioni e backup
- Dati dell'officina e testi dei messaggi WhatsApp.
- Backup e ripristino in JSON di clienti, preventivi e impostazioni, compresi gli avvisi.

## File del progetto
| File | Contenuto |
|---|---|
| `index.html` | L'app completa: interfaccia, logica e configurazione Firebase |
| `sw.js` | Service worker per installazione e funzionamento offline |
| `manifest.json` | Dati per l'installazione come app |
| `logo.png` e icone | Logo E-Duck Garage |

## Aggiornare l'app
1. Sostituisci su GitHub i file modificati, di solito solo `index.html`.
2. Sui dispositivi tocca il numero di versione accanto al nome per installare l'aggiornamento.

## Dati su Firestore
- `clienti`: un documento per cliente, con monopattini, lavorazioni e acconti.
- `preventivi`: un documento per preventivo.
- `impostazioni/officina`: impostazioni dell'officina e avvisi della sezione "Da avvisare".
