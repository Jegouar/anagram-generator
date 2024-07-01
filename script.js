// Array of 50 from Rolling Stone 100 greatest artists
const artists = [ 
    {
        solution: "The Beatles",
        questions: ["Be Athletes", "Beset Lathe", "Late Behest", "Sable Teeth", "Stealth Bee", "Table These", "Testable Eh"]
    },
    {
        solution: "Bob Dylan",
        questions: ["Ably Bond", "And Lobby", "Ban Dolby", "Bland Boy", "Blond Bay", "DNA Lobby", "Nobby Lad", "Nobly Bad"]
    },
    {
        solution: "Elvis Presley",
        questions: ["Every Lipless", "Levelers Yips", "Lisp Severely", "Lively Sprees", "Relives Yelps", "Silvery Peels", "Sleepy Livers"]
    },
    {
        solution: "The Rolling Stones",
        questions: ["Hollering Stetson", "Loneliest Throngs", "Sheltering Stolon", "Singleton Holster", "Strongest Hellion", "Thornless Lentigo"]
    },
    {
        solution: "James Brown",
        questions: ["Arm Job News", "Bjorn Saw Me", "Bowmen Jars", "Jab Mr Owens", "Jam Be Sworn", "Jon Mars Web", "Mrs Jawbone", "NJ Amber Sow", "Worsen Jamb"]
    },
    {
        solution: "Little Richard",
        questions: ["A Thrill Triced", "Arthritic Dell", "Chattier Drill", "Eldritch Trail", "Hit Redrill Act", "Lid Arch Litter", "Rattlier Child", "The Acrid Trill"]
    },
    {
        solution: "Aretha Franklin",
        questions: ["Ah Fraternal Kin", "Ant Hair Flanker", "Freak Anthralin", "Harken Altar Fin", "Linnet Hark Afar", "Rank Filth Arena", "Thank Frenal Air"]
    },
    {
        solution: "Ray Charles",
        questions: ["Arch Layers", "Carry Leash", "Cherry Alas", "Clay Sharer", "Early Crash", "Larch Years", "Larry Aches", "Lycra Hares", "Race Rashly", "Rarely Cash"]
    },
    {
        solution: "Bob Marley",
        questions: ["Ambler Boy", "Baby Morel", "Balmy Robe", "Barley Mob", "Early Bomb", "Embryo Lab", "Lobby Mare", "Marble Yob"]
    },
    {
        solution: "The Beach Boys",
        questions: ["Achy Ebb Ethos", "Botch Eye Bash", "Cheesy Bat Hob", "Cosh The Abbey", "He Obeys Batch", "Hey Bob Cheats", "Teaches Hobby", "The Baby Echoes"]
    },
    {
        solution: "Stevie Wonder",
        questions: ["Downiest Ever", "Endow Restive", "Event Dowries", "Inverted Woes", "Overwise Dent", "Rewoven Deist", "Townees Drive", "Vowed Entries", "Worse Evident"]
    },
    {
        solution: "Muddy Waters",
        questions: ["Add Rusty Mew", "Am Ruddy Stew", "Dewy Mustard", "Dry Smut Awed", "Dusty Warmed", "Duty Swarmed", "Tawdry Mused", "West Army Dud", "Wry Dams Duet"]
    },
    {
        solution: "Marvin Gaye",
        questions: ["Am Vinegary", "Amine Gravy", "Germy Avian", "Ivy Manager", "Magyar Vein", "Navy Mirage", "Van Imagery", "Vary Enigma", "Via Germany"]
    },
    {
        solution: "The Velvet Underground",
        questions: ["Denver Thonged Vulture", "Devolve Hunted Grunter", "Devour Ventured Length", "Evolved Gender Untruth", "Hungover Nutter Delved", "Relent Revved Doughnut", "Vend Turtledove Hunger"]
    },
    {
        solution: "Otis Redding",
        questions: ["Dentoid Rigs", "Deriding Sot", "Design Droit", "Desiring Dot", "Didst Ignore", "Driest Dingo", "Giddier Snot", "Ingest Droid", "Stoned Rigid", "Storing Died", "Tired Doings"]
    },
    {
        solution: "Bruce Springsteen",
        questions: ["Burping Erectness", "Bursting Presence", "Perturbing Scenes", "Prescribe Stengun", "Presenting Cubers", "Pubescent Ringers", "Sprucest Beginner"]
    },
    {
        solution: "Fats Domino",
        questions: ["Doom Faints", "Fad Motions", "Find Tomaso", "Foot Admins", "Footman IDs", "If Mastodon", "Mantis Food", "Nomad Foist", "Of Saintdom", "Soft Domain"]
    },
    {
        solution: "The Ramones",
        questions: ["Arson Theme", "At Horsemen", "Earth Omens", "Erase Month", "Harem Notes", "Hate Sermon", "Herons Mate", "More Athens", "One Hamster", "Rose Anthem", "Short Enema"]
    },
    {
        solution: "Smokey Robinson",
        questions: ["Bonkers Isonomy", "Monkeys Bin Roos", "Monsoon Be Risky", "Nosy Bike Morons", "Or Bonny Eskimos", "Rosy Mekon Bison", "Smoky Iron Bones", "Symbion Snooker"]
    },
    {
        solution: "The Everly Brothers",
        questions: ["Better Sherry Hovel", "Blether Hero Vestry", "Bothers The Revelry", "Every Holster Berth", "Shelve Hotter Berry", "The Bolshy Reverter", "Thresh Beery Revolt", ]
    },
    {
        solution: "David Bowie",
        questions: ["Abided I Vow", "Add Bio View", "Divide A Bow", "Ibid Avowed", "Owe Avid Bid", "We Avoid Bid", "Web Aid Void"]
    },
    {
        solution: "Simon and Garfunkel",
        questions: ["Adenoma Flunks Grin", "Dunking Lemons Afar", "Emus Adorn Flanking", "Frankalmoign Dunes", "Frogman Dunks Alien", "Nurse Faking Almond", "Unmasking Foreland", "Unranked Flamingoes", ]
    },
    {
        solution: "The Doors",
        questions: ["Dot Horse", "Dotes Rho", "Dr Sooth", "Herd Soot", "Oh Dorset", "Hot Doser", "Or Hosted", "Others Do", "Red Shoot", "Rest Hood", "Stood Her"]
    },
    {
        solution: "Sly and the Family Stone",
        questions: ["Anonymity Felt Slashed", "Athenians Fly Modestly", "Essentially Thy Fandom", "Falsely Hand Testimony", "Men Fatally Dishonesty", "NHS Loyalty Manifested", "Seasonally Fitted Hymn", "They Stand Alone Flimsy"]
    },
    {
        solution: "The Allman Brothers Band",
        questions: ["Abnormal Shetland Berth", "Amber Netball Shorthand", "Bathe Northland Marbles", "Batman Brothel Handlers", "Hard Sabbath Enrollment", "Netherlands Brabham Lot", "Torn Lambeth Handlebars"]
    },
    {
        solution: "Eric Clapton",
        questions: ["Clarinet Cop", "Concert Pail", "Cortical Pen", "LARP Conceit", "Narcoleptic", "Necrotic Pal", "Once Clipart", "Pilot Cancer", "Porcine Talc", "Pro Canticle", "Rail Concept", "Tonic Placer"]
    },
    {
        solution: "Grateful Dead",
        questions: ["Dreadful Gate", "Elf Graduated", "Fetal Guarded", "Grated Feudal", "Lauded Get Far", "RAF Dug Elated", "Rag Defaulted", "Rat Eluded Fag", "Regulated Fad", ]
    },
    {
        solution: "Aerosmith",
        questions: ["Amir Ethos", "Ham Sortie", "Hem Ratios", "Her Taoism", "Hot Armies", "Mother ISA", "Ohm Satire", "Other Aims", "Raise Moth", "Set Mohair", "Smother AI", "The Maoris", "Theriomas", ]
    },
    {
        solution: "The Sex Pistols",
        questions: ["Else Stop Sixth", "Exit Step Slosh", "Helix Sets Post", "List Hexes Spot", "Polishes Texts", "Telex Sophists", "Textiles Shops", "This Essex Plot", "Thistles Expos"]
    },
    {
        solution: "Metallica",
        questions: ["Alt Malice", "At All Mice", "Camel Tail", "Cite Llama", "Email Talc", "Late Claim", "Lilac Meat", "Mail Cleat", "Malta Lice", "Tamil Lace"]
    },
    {
        solution: "Joni Mitchell",
        questions: ["Cell Him Joint", "Come Thin Jill", "Etch Join Mill", "Jilt Him Clone", "Jolt Michelin", "Lemon Chi Jilt", "Men Jot Chilli"]
    },
    {
        solution: "Tina Turner",
        questions: ["Entrain Rut", "Errant Unit", "Inner Tuart", "Iran Nutter", "Nattier Urn", "Nitrate Run", "Nut Terrain", "Retina Turn", "Ruin Natter", "Runtier Ant", "Truant Rein"]
    },
    {
        solution: "The Temptations",
        questions: ["Histone Attempt", "Impotent Thetas", "Pantheist Totem", "Patientest Moth", "Pottiest Anthem", "Tapotement Hits", "Tattiest Phenom", "Tophi Testament"]
    },
    {
        solution: "Jackie Wilson",
        questions: ["Akin Ice Jowls", "Cow Aisle Jink", "Icon Like Jaws", "Jake Wins Coil", "Jawline Sicko", "Join Wick Sale", "Nisei Lockjaw", "Wine Sock Jail"]
    },
    {
        solution: "The Police",
        questions: ["Cheep Toil", "Chile Poet", "Clothe Pie", "Elite Chop", "Elope Itch", "Epic Hotel", "Heel Topic", "Photic Eel", "Pole Ethic", "Tile Epoch", "Toeclip Eh"]
    },
    {
        solution: "Radiohead",
        questions: ["Aide Hoard", "Aired Doha", "Aroha Died", "Dior Ahead", "Do Airhead", "Had Roadie", "Haired Ado", "Hoard Idea", "Idaho Dare", "Ore Had Aid"]
    },
    {
        solution: "Hank Williams",
        questions: ["Alas Kiln Whim", "Hail Swan Milk", "Kill Main Wash", "Liminal Hawks", "Manilla Whisk", "Mini Walk Lash", "Sikh Mail Lawn", "Wish Akin Mall"]
    },
    {
        solution: "The Four Tops",
        questions: ["Fourth Poets", "Fresh Opt Out", "Hoof Sputter", "Hoopers Tuft", "Poo Furthest", "Porous Theft", "Put For Those", "Toft Orpheus", "Use Froth Pot"]
    },
    {
        solution: "Elvis Costello",
        questions: ["Cellos Violets", "Clots Lovelies", "Covets Lollies", "Evillest Locos", "Oil Cell Stoves", "Solo Celt Levis", "Still Loves CEO", "Vets Close Lilo", "Voiceless Toll"]
    },
    {
        solution: "The Drifters",
        questions: ["Deer Thrifts", "Defter Shirt", "Deter Shrift", "Freed Thirst", "Fret Dithers", "Rider Thefts", "Shred Fitter", "Third Fester"]
    },
    {
        solution: "Creedence Clearwater Revival",
        questions: ["Arctic Relevance Awed Reveler", "Cancelled Recreative Waverer", "Cleverer Waivered Accelerant", "Lawrence Accelerated Reviver", "Recall Reverenced Activewear", "Revere Wanted Clavicle Career", "Weaver Levered Recalcitrance", "Welter Irreverence Cavalcade"]
    },
    {
        solution: "The Yardbirds",
        questions: ["Bat Did Sherry", "Beardy Thirds", "Brides Had Try", "Dyads Rebirth", "Hydrated Ribs", "Rated Hybrids", "Red Birthdays", "Shared Dry Bit", "Trashy Bidder"]
    },
    {
        solution: "Carlos Santana",
        questions: ["Acral Assonant", "Across Lantana", "Alas Rat Canons", "Alcantara Sons", "Carnal Sonatas", "Car Oats Annals", "Catalan Arsons", "NASA Not Scalar", "Scrotal Ananas"]
    },
    {
        solution: "Tom Petty and the Heartbreakers",
        questions: ["Abetted Northeast Hypermarket", "Better Ratepayer Method Thanks", "Breathy Heatstroke Department", "Dentate Stepbrother Haymarket", "Hothead Basketry Pretreatment", "Hyphenated Beatmaker Trotters", "Penetrate Throaty Berkhamsted", "Permeated Knotty Batter Rehash", "Temporary Batted Tether Shaken"]
    },
    {
        solution: "Booker T. and the MGs",
        questions: ["Bad Monks Together", "Bankers Got Method", "Get Handbook Terms", "Ghost Not Embarked", "Knob Gathered Most", "Mad Ebook Strength", "Mekong Debtors Hat", "Robots Thanked Gem", "Smoothened KGB Rat"]
    },
    {
        solution: "Diana Ross and the Supremes",
        questions: ["Dinosaur Spreadsheets Man", "DNA Assumptions Rehearsed", "Maidenhead Superstar Sons", "Mud Harnessed Separations", "Predominant Uses Harassed", "Raid Sudanese Smartphones", "Rounder Hemp Assassinated", "Same Honduras Pedestrians", "Spearheaded Rust Mansions"]
    },
    {
        solution: "Curtis Mayfield",
        questions: ["Clarified Musty", "Creams Fluidity", "Crudites Family", "Fluidic Mastery", "Fruity Decimals", "Lucidity Frames", "Midrise Faculty", "Ratified Clumsy", "Rectify Dualism", "Sacrum Fidelity", "Timidly Surface"]
    },
    {
        solution: "Carl Perkins",
        questions: ["Clip Rankers", "Crinkles Rap", "Kiln Scraper", "Pilsner Rack", "Prank Relics", "Prince Larks", "Ran Prickles", "Rink Parcels", "RNLI Packers", "Sprinkle Car"]
    },
    {
        solution: "Talking Heads",
        questions: ["Asking Halted", "Hating Daleks", "Knighted Alas", "Linked Aghast", "Slaking Death", "Snaked Alight", "Taking Lashed", "Thailand Kegs", "Thanks Gilead"]
    },
    {
        solution: "Electric Light Orchestra",
        questions: ["Catchier Thrills Cortege", "Chiller Richocet Targets", "College Chitchat Stirrer", "Correct Ethical Lighters", "Largest Choleric Chitter", "Greater Crotchet Chillis", "Stretch Chlorite Glacier", "Tighter Chelator Circles"]
    }
];

function getQuestion() {
    // Get random selection from artists array
    const randomArtist = artists[Math.floor(Math.random() * artists.length)];
    const randomSolution = randomArtist.solution;
    // Get random selection from artist object questions array
    const randomQuestion = randomArtist.questions[Math.floor(Math.random() * randomArtist.questions.length)];
    const newQuestion = {
        question: randomQuestion,
        solution: randomSolution
    };
    return newQuestion;
}

// Array of generated questions and answers
let questionList = [];

function showQuestions(numberOfQuestions) {
    console.log(`Welcome to the quiz, you have ${numberOfQuestions} questions.\n\n`);
    for (let i = 0; i < numberOfQuestions; i++) {
        let nextQuestion = getQuestion();
        questionList.push(nextQuestion);
        setTimeout(() => {
            console.log(`Question ${i + 1}: ${questionList[i].question}\n`);
        }, 1000);
        setTimeout(() => {
            console.log(`Solution ${i + 1}: ${questionList[i].solution}\n`);
        }, 11000);
    }
    setTimeout(() => {
        console.log(`\nThe solutions will be revealed in ten seconds...\n\n`);
    }, 2000);
}
showQuestions(3);

