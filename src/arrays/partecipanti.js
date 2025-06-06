const partecipanti = [
    {
        id: 1,
        nome: "Luca",
        cognome: "Rossi",
        codice_fiscale: "RSSLCU85M12H501X",
        numero_di_telefono: "+393331234567",
        numero_di_emergenza: "+393351234567",
        email: "luca.rossi@example.com",
        id_viaggio: [1, 3]
    },
    {
        id: 2,
        nome: "Maria",
        cognome: "Bianchi",
        codice_fiscale: "BNCMRA82D45G224Z",
        numero_di_telefono: "+393332345678",
        numero_di_emergenza: "+393352345678",
        email: "maria.bianchi@example.com",
        id_viaggio: [2, 5, 7]
    },
    {
        id: 3,
        nome: "Giovanni",
        cognome: "Verdi",
        codice_fiscale: "VRDGNN90C10F205B",
        numero_di_telefono: "+393333456789",
        numero_di_emergenza: "+393353456789",
        email: "giovanni.verdi@example.com",
        id_viaggio: [4]
    },
    {
        id: 4,
        nome: "Anna",
        cognome: "Russo",
        codice_fiscale: "RSSNNA88E45L219T",
        numero_di_telefono: "+393334567890",
        numero_di_emergenza: "+393354567890",
        email: "anna.russo@example.com",
        id_viaggio: [1, 6]
    },
    {
        id: 5,
        nome: "Marco",
        cognome: "Ferrari",
        codice_fiscale: "FRRMRC83P12H501Y",
        numero_di_telefono: "+393335678901",
        numero_di_emergenza: "+393355678901",
        email: "marco.ferrari@example.com",
        id_viaggio: [3, 8]
    },
    {
        id: 6,
        nome: "Sara",
        cognome: "Esposito",
        codice_fiscale: "SPSSRA92A45G224W",
        numero_di_telefono: "+393336789012",
        numero_di_emergenza: "+393356789012",
        email: "sara.esposito@example.com",
        id_viaggio: [2, 4, 6]
    },
    {
        id: 7,
        nome: "Andrea",
        cognome: "Romano",
        codice_fiscale: "RMNNDR87M20H703V",
        numero_di_telefono: "+393337890123",
        numero_di_emergenza: "+393357890123",
        email: "andrea.romano@example.com",
        id_viaggio: [5]
    },
    {
        id: 8,
        nome: "Chiara",
        cognome: "Gallo",
        codice_fiscale: "GLLCHR84D45L219S",
        numero_di_telefono: "+393338901234",
        numero_di_emergenza: "+393358901234",
        email: "chiara.gallo@example.com",
        id_viaggio: [1, 3, 7]
    },
    {
        id: 9,
        nome: "Matteo",
        cognome: "Conti",
        codice_fiscale: "CNTMTT91C12H501U",
        numero_di_telefono: "+393339012345",
        numero_di_emergenza: "+393359012345",
        email: "matteo.conti@example.com",
        id_viaggio: [2, 8]
    },
    {
        id: 10,
        nome: "Elena",
        cognome: "Marchetti",
        codice_fiscale: "MRCLNE89E45G224R",
        numero_di_telefono: "+393330123456",
        numero_di_emergenza: "+393350123456",
        email: "elena.marchetti@example.com",
        id_viaggio: [4, 6]
    },
    {
        id: 11,
        nome: "Paolo",
        cognome: "Costa",
        codice_fiscale: "CSTPLA86P20H703T",
        numero_di_telefono: "+393341234567",
        numero_di_emergenza: "+393361234567",
        email: "paolo.costa@example.com",
        id_viaggio: [1, 5]
    },
    {
        id: 12,
        nome: "Francesca",
        cognome: "Giordano",
        codice_fiscale: "GRDFNC93A45L219V",
        numero_di_telefono: "+393342345678",
        numero_di_emergenza: "+393362345678",
        email: "francesca.giordano@example.com",
        id_viaggio: [3, 7]
    },
    {
        id: 13,
        nome: "Stefano",
        cognome: "Mancini",
        codice_fiscale: "MNCSFN88M12H501W",
        numero_di_telefono: "+393343456789",
        numero_di_emergenza: "+393363456789",
        email: "stefano.mancini@example.com",
        id_viaggio: [2, 4, 8]
    },
    {
        id: 14,
        nome: "Laura",
        cognome: "Rizzo",
        codice_fiscale: "RZZLRA85D45G224X",
        numero_di_telefono: "+393344567890",
        numero_di_emergenza: "+393364567890",
        email: "laura.rizzo@example.com",
        id_viaggio: [1, 6]
    },
    {
        id: 15,
        nome: "Antonio",
        cognome: "Lombardi",
        codice_fiscale: "LMBTNN90C20H703S",
        numero_di_telefono: "+393345678901",
        numero_di_emergenza: "+393365678901",
        email: "antonio.lombardi@example.com",
        id_viaggio: [3, 5]
    },
    {
        id: 16,
        nome: "Valentina",
        cognome: "Moretti",
        codice_fiscale: "MRTVNT87E45L219R",
        numero_di_telefono: "+393346789012",
        numero_di_emergenza: "+393366789012",
        email: "valentina.moretti@example.com",
        id_viaggio: [2, 7]
    },
    {
        id: 17,
        nome: "Roberto",
        cognome: "Barbieri",
        codice_fiscale: "BRBRRT84P12H501V",
        numero_di_telefono: "+393347890123",
        numero_di_emergenza: "+393367890123",
        email: "roberto.barbieri@example.com",
        id_viaggio: [4, 8]
    },
    {
        id: 18,
        nome: "Giulia",
        cognome: "Fontana",
        codice_fiscale: "FNTGLI91A45G224W",
        numero_di_telefono: "+393348901234",
        numero_di_emergenza: "+393368901234",
        email: "giulia.fontana@example.com",
        id_viaggio: [1, 3, 6]
    },
    {
        id: 19,
        nome: "Davide",
        cognome: "Santoro",
        codice_fiscale: "SNTDVD88M20H703U",
        numero_di_telefono: "+393349012345",
        numero_di_emergenza: "+393369012345",
        email: "davide.santoro@example.com",
        id_viaggio: [5]
    },
    {
        id: 20,
        nome: "Silvia",
        cognome: "Mariani",
        codice_fiscale: "MRNSLV85D45L219T",
        numero_di_telefono: "+393340123456",
        numero_di_emergenza: "+393360123456",
        email: "silvia.mariani@example.com",
        id_viaggio: [2, 4, 7]
    },
    {
        id: 21,
        nome: "Federico",
        cognome: "Rinaldi",
        codice_fiscale: "RNLFRC92C12H501X",
        numero_di_telefono: "+393371234567",
        numero_di_emergenza: "+393391234567",
        email: "federico.rinaldi@example.com",
        id_viaggio: [3, 6]
    },
    {
        id: 22,
        nome: "Alessia",
        cognome: "Caruso",
        codice_fiscale: "CRSLSA89E45G224Y",
        numero_di_telefono: "+393372345678",
        numero_di_emergenza: "+393392345678",
        email: "alessia.caruso@example.com",
        id_viaggio: [1, 8]
    },
    {
        id: 23,
        nome: "Simone",
        cognome: "Ferri",
        codice_fiscale: "FRRSMN86P20H703V",
        numero_di_telefono: "+393373456789",
        numero_di_emergenza: "+393393456789",
        email: "simone.ferri@example.com",
        id_viaggio: [2, 5]
    },
    {
        id: 24,
        nome: "Elisa",
        cognome: "Martini",
        codice_fiscale: "MRTLSE83A45L219W",
        numero_di_telefono: "+393374567890",
        numero_di_emergenza: "+393394567890",
        email: "elisa.martini@example.com",
        id_viaggio: [4, 7]
    },
    {
        id: 25,
        nome: "Riccardo",
        cognome: "Leone",
        codice_fiscale: "LNERCK90M12H501Z",
        numero_di_telefono: "+393375678901",
        numero_di_emergenza: "+393395678901",
        email: "riccardo.leone@example.com",
        id_viaggio: [3, 6, 8]
    },
    {
        id: 26,
        nome: "Giorgia",
        cognome: "Longo",
        codice_fiscale: "LNGGRO87D45G224X",
        numero_di_telefono: "+393376789012",
        numero_di_emergenza: "+393396789012",
        email: "giorgia.longo@example.com",
        id_viaggio: [1, 5]
    },
    {
        id: 27,
        nome: "Daniele",
        cognome: "Gentile",
        codice_fiscale: "GNTLNI84C20H703W",
        numero_di_telefono: "+393377890123",
        numero_di_emergenza: "+393397890123",
        email: "daniele.gentile@example.com",
        id_viaggio: [2, 7]
    },
    {
        id: 28,
        nome: "Martina",
        cognome: "Martinelli",
        codice_fiscale: "MRTMTN91E45L219V",
        numero_di_telefono: "+393378901234",
        numero_di_emergenza: "+393398901234",
        email: "martina.martinelli@example.com",
        id_viaggio: [4, 8]
    },
    {
        id: 29,
        nome: "Fabio",
        cognome: "Serra",
        codice_fiscale: "SRRFBA88P12H501U",
        numero_di_telefono: "+393379012345",
        numero_di_emergenza: "+393399012345",
        email: "fabio.serra@example.com",
        id_viaggio: [3, 6]
    },
    {
        id: 30,
        nome: "Veronica",
        cognome: "Conte",
        codice_fiscale: "CNTVNC85A45G224T",
        numero_di_telefono: "+393370123456",
        numero_di_emergenza: "+393390123456",
        email: "veronica.conte@example.com",
        id_viaggio: [1, 5, 7]
    },
    {
        id: 31,
        nome: "Gabriele",
        cognome: "Parisi",
        codice_fiscale: "PRSGRL82M20H703S",
        numero_di_telefono: "+393401234567",
        numero_di_emergenza: "+393421234567",
        email: "gabriele.parisi@example.com",
        id_viaggio: [2, 8]
    },
    {
        id: 32,
        nome: "Eleonora",
        cognome: "Vitali",
        codice_fiscale: "VTLNRA89C12H501Y",
        numero_di_telefono: "+393402345678",
        numero_di_emergenza: "+393422345678",
        email: "eleonora.vitali@example.com",
        id_viaggio: [4, 6]
    },
    {
        id: 33,
        nome: "Christian",
        cognome: "De Luca",
        codice_fiscale: "DLQCRS86E45G224Z",
        numero_di_telefono: "+393403456789",
        numero_di_emergenza: "+393423456789",
        email: "christian.deluca@example.com",
        id_viaggio: [3, 7]
    },
    {
        id: 34,
        nome: "Arianna",
        cognome: "Pellegrini",
        codice_fiscale: "PLLRNN93P20H703V",
        numero_di_telefono: "+393404567890",
        numero_di_emergenza: "+393424567890",
        email: "arianna.pellegrini@example.com",
        id_viaggio: [1, 5]
    },
    {
        id: 35,
        nome: "Manuel",
        cognome: "Benedetti",
        codice_fiscale: "BNDMNL90A45L219W",
        numero_di_telefono: "+393405678901",
        numero_di_emergenza: "+393425678901",
        email: "manuel.benedetti@example.com",
        id_viaggio: [2, 4, 8]
    },
    {
        id: 36,
        nome: "Claudia",
        cognome: "Mazza",
        codice_fiscale: "MZZCLD87M12H501X",
        numero_di_telefono: "+393406789012",
        numero_di_emergenza: "+393426789012",
        email: "claudia.mazza@example.com",
        id_viaggio: [3, 6]
    },
    {
        id: 37,
        nome: "Nicola",
        cognome: "Testa",
        codice_fiscale: "TSTNCL84D45G224Y",
        numero_di_telefono: "+393407890123",
        numero_di_emergenza: "+393427890123",
        email: "nicola.testa@example.com",
        id_viaggio: [1, 7]
    },
    {
        id: 38,
        nome: "Serena",
        cognome: "Grasso",
        codice_fiscale: "GRSSRN91C20H703U",
        numero_di_telefono: "+393408901234",
        numero_di_emergenza: "+393428901234",
        email: "serena.grasso@example.com",
        id_viaggio: [5, 8]
    },
    {
        id: 39,
        nome: "Dario",
        cognome: "Palumbo",
        codice_fiscale: "PLMDRA88E45L219T",
        numero_di_telefono: "+393409012345",
        numero_di_emergenza: "+393429012345",
        email: "dario.palumbo@example.com",
        id_viaggio: [2, 6]
    },
    {
        id: 40,
        nome: "Federica",
        cognome: "Ferretti",
        codice_fiscale: "FRRFRC85P12H501V",
        numero_di_telefono: "+393400123456",
        numero_di_emergenza: "+393420123456",
        email: "federica.ferretti@example.com",
        id_viaggio: [3, 4, 7]
    },
    {
        id: 41,
        nome: "Samuele",
        cognome: "Sanna",
        codice_fiscale: "SNNSML92A45G224W",
        numero_di_telefono: "+393411234567",
        numero_di_emergenza: "+393431234567",
        email: "samuele.sanna@example.com",
        id_viaggio: [1, 8]
    },
    {
        id: 42,
        nome: "Vittoria",
        cognome: "Farina",
        codice_fiscale: "FRNVTR89M20H703S",
        numero_di_telefono: "+393412345678",
        numero_di_emergenza: "+393432345678",
        email: "vittoria.farina@example.com",
        id_viaggio: [2, 5]
    },
    {
        id: 43,
        nome: "Lorenzo",
        cognome: "Riva",
        codice_fiscale: "RVILRZ86C12H501Y",
        numero_di_telefono: "+393413456789",
        numero_di_emergenza: "+393433456789",
        email: "lorenzo.riva@example.com",
        id_viaggio: [3, 6, 7]
    },
    {
        id: 44,
        nome: "Greta",
        cognome: "Monti",
        codice_fiscale: "MNTGRT83E45G224Z",
        numero_di_telefono: "+393414567890",
        numero_di_emergenza: "+393434567890",
        email: "greta.monti@example.com",
        id_viaggio: [4, 8]
    },
    {
        id: 45,
        nome: "Mirko",
        cognome: "Morelli",
        codice_fiscale: "MRLMRK90P20H703V",
        numero_di_telefono: "+393415678901",
        numero_di_emergenza: "+393435678901",
        email: "mirko.morelli@example.com",
        id_viaggio: [1, 5]
    },
    {
        id: 46,
        nome: "Noemi",
        cognome: "Amato",
        codice_fiscale: "MTANME87A45L219W",
        numero_di_telefono: "+393416789012",
        numero_di_emergenza: "+393436789012",
        email: "noemi.amato@example.com",
        id_viaggio: [2, 7]
    },
    {
        id: 47,
        nome: "Emanuele",
        cognome: "Bernardi",
        codice_fiscale: "BRNMNL84D45G224X",
        numero_di_telefono: "+393417890123",
        numero_di_emergenza: "+393437890123",
        email: "emanuele.bernardi@example.com",
        id_viaggio: [3, 6, 8]
    },
    {
        id: 48,
        nome: "Aurora",
        cognome: "Pellegrino",
        codice_fiscale: "PLLRRA91M12H501U",
        numero_di_telefono: "+393418901234",
        numero_di_emergenza: "+393438901234",
        email: "aurora.pellegrino@example.com",
        id_viaggio: [4, 7]
    },
    {
        id: 49,
        nome: "Jacopo",
        cognome: "Fiore",
        codice_fiscale: "FRRJCP88C20H703T",
        numero_di_telefono: "+393419012345",
        numero_di_emergenza: "+393439012345",
        email: "jacopo.fiore@example.com",
        id_viaggio: [1, 5, 8]
    },
    {
        id: 50,
        nome: "Sofia",
        cognome: "Greco",
        codice_fiscale: "GRCSFO85E45L219S",
        numero_di_telefono: "+393410123456",
        numero_di_emergenza: "+393430123456",
        email: "sofia.greco@example.com",
        id_viaggio: [2, 6]
    }
];

export default partecipanti;