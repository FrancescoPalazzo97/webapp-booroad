const partecipanti = [
    {
        id_partecipante: 1,
        Nome: "Luca",
        Cognome: "Rossi",
        codice_fiscale: "RSSLCU85M12H501X",
        numero_di_telefono: "+393331234567",
        numero_di_emergenza: "+393351234567",
        email: "luca.rossi@example.com",
        id_viaggio: [1, 3]
    },
    {
        id_partecipante: 2,
        Nome: "Maria",
        Cognome: "Bianchi",
        codice_fiscale: "BNCMRA82D45G224Z",
        numero_di_telefono: "+393332345678",
        numero_di_emergenza: "+393352345678",
        email: "maria.bianchi@example.com",
        id_viaggio: [2, 5, 7]
    },
    {
        id_partecipante: 3,
        Nome: "Giovanni",
        Cognome: "Verdi",
        codice_fiscale: "VRDGNN90C10F205B",
        numero_di_telefono: "+393333456789",
        numero_di_emergenza: "+393353456789",
        email: "giovanni.verdi@example.com",
        id_viaggio: [4]
    },
    {
        id_partecipante: 4,
        Nome: "Anna",
        Cognome: "Russo",
        codice_fiscale: "RSSNNA88E45L219T",
        numero_di_telefono: "+393334567890",
        numero_di_emergenza: "+393354567890",
        email: "anna.russo@example.com",
        id_viaggio: [1, 6]
    },
    {
        id_partecipante: 5,
        Nome: "Marco",
        Cognome: "Ferrari",
        codice_fiscale: "FRRMRC83P12H501Y",
        numero_di_telefono: "+393335678901",
        numero_di_emergenza: "+393355678901",
        email: "marco.ferrari@example.com",
        id_viaggio: [3, 8]
    },
    {
        id_partecipante: 6,
        Nome: "Sara",
        Cognome: "Esposito",
        codice_fiscale: "SPSSRA92A45G224W",
        numero_di_telefono: "+393336789012",
        numero_di_emergenza: "+393356789012",
        email: "sara.esposito@example.com",
        id_viaggio: [2, 4, 6]
    },
    {
        id_partecipante: 7,
        Nome: "Andrea",
        Cognome: "Romano",
        codice_fiscale: "RMNNDR87M20H703V",
        numero_di_telefono: "+393337890123",
        numero_di_emergenza: "+393357890123",
        email: "andrea.romano@example.com",
        id_viaggio: [5]
    },
    {
        id_partecipante: 8,
        Nome: "Chiara",
        Cognome: "Gallo",
        codice_fiscale: "GLLCHR84D45L219S",
        numero_di_telefono: "+393338901234",
        numero_di_emergenza: "+393358901234",
        email: "chiara.gallo@example.com",
        id_viaggio: [1, 3, 7]
    },
    {
        id_partecipante: 9,
        Nome: "Matteo",
        Cognome: "Conti",
        codice_fiscale: "CNTMTT91C12H501U",
        numero_di_telefono: "+393339012345",
        numero_di_emergenza: "+393359012345",
        email: "matteo.conti@example.com",
        id_viaggio: [2, 8]
    },
    {
        id_partecipante: 10,
        Nome: "Elena",
        Cognome: "Marchetti",
        codice_fiscale: "MRCLNE89E45G224R",
        numero_di_telefono: "+393330123456",
        numero_di_emergenza: "+393350123456",
        email: "elena.marchetti@example.com",
        id_viaggio: [4, 6]
    },
    {
        id_partecipante: 11,
        Nome: "Paolo",
        Cognome: "Costa",
        codice_fiscale: "CSTPLA86P20H703T",
        numero_di_telefono: "+393341234567",
        numero_di_emergenza: "+393361234567",
        email: "paolo.costa@example.com",
        id_viaggio: [1, 5]
    },
    {
        id_partecipante: 12,
        Nome: "Francesca",
        Cognome: "Giordano",
        codice_fiscale: "GRDFNC93A45L219V",
        numero_di_telefono: "+393342345678",
        numero_di_emergenza: "+393362345678",
        email: "francesca.giordano@example.com",
        id_viaggio: [3, 7]
    },
    {
        id_partecipante: 13,
        Nome: "Stefano",
        Cognome: "Mancini",
        codice_fiscale: "MNCSFN88M12H501W",
        numero_di_telefono: "+393343456789",
        numero_di_emergenza: "+393363456789",
        email: "stefano.mancini@example.com",
        id_viaggio: [2, 4, 8]
    },
    {
        id_partecipante: 14,
        Nome: "Laura",
        Cognome: "Rizzo",
        codice_fiscale: "RZZLRA85D45G224X",
        numero_di_telefono: "+393344567890",
        numero_di_emergenza: "+393364567890",
        email: "laura.rizzo@example.com",
        id_viaggio: [1, 6]
    },
    {
        id_partecipante: 15,
        Nome: "Antonio",
        Cognome: "Lombardi",
        codice_fiscale: "LMBTNN90C20H703S",
        numero_di_telefono: "+393345678901",
        numero_di_emergenza: "+393365678901",
        email: "antonio.lombardi@example.com",
        id_viaggio: [3, 5]
    },
    {
        id_partecipante: 16,
        Nome: "Valentina",
        Cognome: "Moretti",
        codice_fiscale: "MRTVNT87E45L219R",
        numero_di_telefono: "+393346789012",
        numero_di_emergenza: "+393366789012",
        email: "valentina.moretti@example.com",
        id_viaggio: [2, 7]
    },
    {
        id_partecipante: 17,
        Nome: "Roberto",
        Cognome: "Barbieri",
        codice_fiscale: "BRBRRT84P12H501V",
        numero_di_telefono: "+393347890123",
        numero_di_emergenza: "+393367890123",
        email: "roberto.barbieri@example.com",
        id_viaggio: [4, 8]
    },
    {
        id_partecipante: 18,
        Nome: "Giulia",
        Cognome: "Fontana",
        codice_fiscale: "FNTGLI91A45G224W",
        numero_di_telefono: "+393348901234",
        numero_di_emergenza: "+393368901234",
        email: "giulia.fontana@example.com",
        id_viaggio: [1, 3, 6]
    },
    {
        id_partecipante: 19,
        Nome: "Davide",
        Cognome: "Santoro",
        codice_fiscale: "SNTDVD88M20H703U",
        numero_di_telefono: "+393349012345",
        numero_di_emergenza: "+393369012345",
        email: "davide.santoro@example.com",
        id_viaggio: [5]
    },
    {
        id_partecipante: 20,
        Nome: "Silvia",
        Cognome: "Mariani",
        codice_fiscale: "MRNSLV85D45L219T",
        numero_di_telefono: "+393340123456",
        numero_di_emergenza: "+393360123456",
        email: "silvia.mariani@example.com",
        id_viaggio: [2, 4, 7]
    },
    {
        id_partecipante: 21,
        Nome: "Federico",
        Cognome: "Rinaldi",
        codice_fiscale: "RNLFRC92C12H501X",
        numero_di_telefono: "+393371234567",
        numero_di_emergenza: "+393391234567",
        email: "federico.rinaldi@example.com",
        id_viaggio: [3, 6]
    },
    {
        id_partecipante: 22,
        Nome: "Alessia",
        Cognome: "Caruso",
        codice_fiscale: "CRSLSA89E45G224Y",
        numero_di_telefono: "+393372345678",
        numero_di_emergenza: "+393392345678",
        email: "alessia.caruso@example.com",
        id_viaggio: [1, 8]
    },
    {
        id_partecipante: 23,
        Nome: "Simone",
        Cognome: "Ferri",
        codice_fiscale: "FRRSMN86P20H703V",
        numero_di_telefono: "+393373456789",
        numero_di_emergenza: "+393393456789",
        email: "simone.ferri@example.com",
        id_viaggio: [2, 5]
    },
    {
        id_partecipante: 24,
        Nome: "Elisa",
        Cognome: "Martini",
        codice_fiscale: "MRTLSE83A45L219W",
        numero_di_telefono: "+393374567890",
        numero_di_emergenza: "+393394567890",
        email: "elisa.martini@example.com",
        id_viaggio: [4, 7]
    },
    {
        id_partecipante: 25,
        Nome: "Riccardo",
        Cognome: "Leone",
        codice_fiscale: "LNERCK90M12H501Z",
        numero_di_telefono: "+393375678901",
        numero_di_emergenza: "+393395678901",
        email: "riccardo.leone@example.com",
        id_viaggio: [3, 6, 8]
    },
    {
        id_partecipante: 26,
        Nome: "Giorgia",
        Cognome: "Longo",
        codice_fiscale: "LNGGRO87D45G224X",
        numero_di_telefono: "+393376789012",
        numero_di_emergenza: "+393396789012",
        email: "giorgia.longo@example.com",
        id_viaggio: [1, 5]
    },
    {
        id_partecipante: 27,
        Nome: "Daniele",
        Cognome: "Gentile",
        codice_fiscale: "GNTLNI84C20H703W",
        numero_di_telefono: "+393377890123",
        numero_di_emergenza: "+393397890123",
        email: "daniele.gentile@example.com",
        id_viaggio: [2, 7]
    },
    {
        id_partecipante: 28,
        Nome: "Martina",
        Cognome: "Martinelli",
        codice_fiscale: "MRTMTN91E45L219V",
        numero_di_telefono: "+393378901234",
        numero_di_emergenza: "+393398901234",
        email: "martina.martinelli@example.com",
        id_viaggio: [4, 8]
    },
    {
        id_partecipante: 29,
        Nome: "Fabio",
        Cognome: "Serra",
        codice_fiscale: "SRRFBA88P12H501U",
        numero_di_telefono: "+393379012345",
        numero_di_emergenza: "+393399012345",
        email: "fabio.serra@example.com",
        id_viaggio: [3, 6]
    },
    {
        id_partecipante: 30,
        Nome: "Veronica",
        Cognome: "Conte",
        codice_fiscale: "CNTVNC85A45G224T",
        numero_di_telefono: "+393370123456",
        numero_di_emergenza: "+393390123456",
        email: "veronica.conte@example.com",
        id_viaggio: [1, 5, 7]
    },
    {
        id_partecipante: 31,
        Nome: "Gabriele",
        Cognome: "Parisi",
        codice_fiscale: "PRSGRL82M20H703S",
        numero_di_telefono: "+393401234567",
        numero_di_emergenza: "+393421234567",
        email: "gabriele.parisi@example.com",
        id_viaggio: [2, 8]
    },
    {
        id_partecipante: 32,
        Nome: "Eleonora",
        Cognome: "Vitali",
        codice_fiscale: "VTLNRA89C12H501Y",
        numero_di_telefono: "+393402345678",
        numero_di_emergenza: "+393422345678",
        email: "eleonora.vitali@example.com",
        id_viaggio: [4, 6]
    },
    {
        id_partecipante: 33,
        Nome: "Christian",
        Cognome: "De Luca",
        codice_fiscale: "DLQCRS86E45G224Z",
        numero_di_telefono: "+393403456789",
        numero_di_emergenza: "+393423456789",
        email: "christian.deluca@example.com",
        id_viaggio: [3, 7]
    },
    {
        id_partecipante: 34,
        Nome: "Arianna",
        Cognome: "Pellegrini",
        codice_fiscale: "PLLRNN93P20H703V",
        numero_di_telefono: "+393404567890",
        numero_di_emergenza: "+393424567890",
        email: "arianna.pellegrini@example.com",
        id_viaggio: [1, 5]
    },
    {
        id_partecipante: 35,
        Nome: "Manuel",
        Cognome: "Benedetti",
        codice_fiscale: "BNDMNL90A45L219W",
        numero_di_telefono: "+393405678901",
        numero_di_emergenza: "+393425678901",
        email: "manuel.benedetti@example.com",
        id_viaggio: [2, 4, 8]
    },
    {
        id_partecipante: 36,
        Nome: "Claudia",
        Cognome: "Mazza",
        codice_fiscale: "MZZCLD87M12H501X",
        numero_di_telefono: "+393406789012",
        numero_di_emergenza: "+393426789012",
        email: "claudia.mazza@example.com",
        id_viaggio: [3, 6]
    },
    {
        id_partecipante: 37,
        Nome: "Nicola",
        Cognome: "Testa",
        codice_fiscale: "TSTNCL84D45G224Y",
        numero_di_telefono: "+393407890123",
        numero_di_emergenza: "+393427890123",
        email: "nicola.testa@example.com",
        id_viaggio: [1, 7]
    },
    {
        id_partecipante: 38,
        Nome: "Serena",
        Cognome: "Grasso",
        codice_fiscale: "GRSSRN91C20H703U",
        numero_di_telefono: "+393408901234",
        numero_di_emergenza: "+393428901234",
        email: "serena.grasso@example.com",
        id_viaggio: [5, 8]
    },
    {
        id_partecipante: 39,
        Nome: "Dario",
        Cognome: "Palumbo",
        codice_fiscale: "PLMDRA88E45L219T",
        numero_di_telefono: "+393409012345",
        numero_di_emergenza: "+393429012345",
        email: "dario.palumbo@example.com",
        id_viaggio: [2, 6]
    },
    {
        id_partecipante: 40,
        Nome: "Federica",
        Cognome: "Ferretti",
        codice_fiscale: "FRRFRC85P12H501V",
        numero_di_telefono: "+393400123456",
        numero_di_emergenza: "+393420123456",
        email: "federica.ferretti@example.com",
        id_viaggio: [3, 4, 7]
    },
    {
        id_partecipante: 41,
        Nome: "Samuele",
        Cognome: "Sanna",
        codice_fiscale: "SNNSML92A45G224W",
        numero_di_telefono: "+393411234567",
        numero_di_emergenza: "+393431234567",
        email: "samuele.sanna@example.com",
        id_viaggio: [1, 8]
    },
    {
        id_partecipante: 42,
        Nome: "Vittoria",
        Cognome: "Farina",
        codice_fiscale: "FRNVTR89M20H703S",
        numero_di_telefono: "+393412345678",
        numero_di_emergenza: "+393432345678",
        email: "vittoria.farina@example.com",
        id_viaggio: [2, 5]
    },
    {
        id_partecipante: 43,
        Nome: "Lorenzo",
        Cognome: "Riva",
        codice_fiscale: "RVILRZ86C12H501Y",
        numero_di_telefono: "+393413456789",
        numero_di_emergenza: "+393433456789",
        email: "lorenzo.riva@example.com",
        id_viaggio: [3, 6, 7]
    },
    {
        id_partecipante: 44,
        Nome: "Greta",
        Cognome: "Monti",
        codice_fiscale: "MNTGRT83E45G224Z",
        numero_di_telefono: "+393414567890",
        numero_di_emergenza: "+393434567890",
        email: "greta.monti@example.com",
        id_viaggio: [4, 8]
    },
    {
        id_partecipante: 45,
        Nome: "Mirko",
        Cognome: "Morelli",
        codice_fiscale: "MRLMRK90P20H703V",
        numero_di_telefono: "+393415678901",
        numero_di_emergenza: "+393435678901",
        email: "mirko.morelli@example.com",
        id_viaggio: [1, 5]
    },
    {
        id_partecipante: 46,
        Nome: "Noemi",
        Cognome: "Amato",
        codice_fiscale: "MTANME87A45L219W",
        numero_di_telefono: "+393416789012",
        numero_di_emergenza: "+393436789012",
        email: "noemi.amato@example.com",
        id_viaggio: [2, 7]
    },
    {
        id_partecipante: 47,
        Nome: "Emanuele",
        Cognome: "Bernardi",
        codice_fiscale: "BRNMNL84D45G224X",
        numero_di_telefono: "+393417890123",
        numero_di_emergenza: "+393437890123",
        email: "emanuele.bernardi@example.com",
        id_viaggio: [3, 6, 8]
    },
    {
        id_partecipante: 48,
        Nome: "Aurora",
        Cognome: "Pellegrino",
        codice_fiscale: "PLLRRA91M12H501U",
        numero_di_telefono: "+393418901234",
        numero_di_emergenza: "+393438901234",
        email: "aurora.pellegrino@example.com",
        id_viaggio: [4, 7]
    },
    {
        id_partecipante: 49,
        Nome: "Jacopo",
        Cognome: "Fiore",
        codice_fiscale: "FRRJCP88C20H703T",
        numero_di_telefono: "+393419012345",
        numero_di_emergenza: "+393439012345",
        email: "jacopo.fiore@example.com",
        id_viaggio: [1, 5, 8]
    },
    {
        id_partecipante: 50,
        Nome: "Sofia",
        Cognome: "Greco",
        codice_fiscale: "GRCSFO85E45L219S",
        numero_di_telefono: "+393410123456",
        numero_di_emergenza: "+393430123456",
        email: "sofia.greco@example.com",
        id_viaggio: [2, 6]
    }
];

export default partecipanti;