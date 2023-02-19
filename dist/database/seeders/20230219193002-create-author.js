"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sequelize_1 = require("sequelize");
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkInsert("Author", [
                {
                    author_id: 1,
                    name: "Fyodor Dostoevsky",
                    description: "Fyodor Mikhailovich Dostoevsky was born on November 11, 1821, in Moscow, Russia. He was the second of seven children of Mikhail Andreevich and Maria Dostoevsky. His father, a doctor, was a member of the Russian nobility, owned serfs and had a considerable estate near Moscow where he lived with his ...",
                },
                {
                    author_id: 2,
                    name: "Dante Alighieri",
                    description: "Dante Alighieri was born in 1265 into the lower nobility of Florence, to Alighiero di Bellincione d'Alighiero, a moneylender. A precocious student, Dante's education focused on rhetoric and grammar. He also became enamored with a young girl, Beatrice Portinari, whose death in 1290 threw a grieving ...",
                },
                {
                    author_id: 3,
                    name: "Lev Tolstoy",
                    description: "Count Lev Nikolaevich Tolstoy was born on September 9, 1828, in his ancestral estate Yasnaya Polyana, South of Moscow, Russia. He was the fourth of five children in a wealthy family of Russian landed Gentry. His parents died when he was a child, and he was brought up by his elder brothers and ...",
                },
                {
                    author_id: 4,
                    name: "Victor Hugo",
                    description: "Although Hugo was fascinated by poems from childhood on, he spent some time on the polytechnic university of Paris until he dedicated all his work to literature. He was one of the few authors who were allowed to reach popularity during lifetime and one of the leaders of French romance.\n\nAfter the ...",
                },
                {
                    author_id: 5,
                    name: "William Shakespeare",
                    description: "William Shakespeare's birthdate is assumed from his baptism on April 25. His father John was the son of a farmer who became a successful tradesman; his mother Mary Arden was gentry. He studied Latin works at Stratford Grammar School, leaving at about age 15. About this time his father suffered an ...",
                },
                {
                    author_id: 6,
                    name: "Johann Wolfgang von Goethe",
                    description: "Johann Wolfgang Goethe was born on 28 August 1749 in Frankfurt am Main, Germany as son of a lawyer. After growing up in a privileged upper middle class family, he studied law in Leipzig from 1765 to 1768, although he was more interested in literature. As he was seriously ill, he had to interrupt ...",
                },
                {
                    author_id: 7,
                    name: "Miguel de Cervantes y Saavedra",
                    description: "Miguel de Cervantes' baptism occurred on October 9, 1547, at Alcala de Henares, Spain, so it is reasonable to assume he was born around that time, and Alcala de Henares has long claimed itself as his birthplace. The son of Rodrigo de Cervantes, an itinerant and not-too-successful surgeon, Miguel ...",
                },
                {
                    author_id: 8,
                    name: "Italo Calvino",
                    description: "Italo Calvino was born on October 15, 1923 in Santiago de Las Vegas, Cuba. He was a writer, known for Boccaccio '70 (1962), The Cultzone Holy Grail (2020) and Tiko and the Shark (1962). He was previously married to Esther Judith Singer. He died on September 19, 1985 in Siena, Tuscany, Italy.",
                },
                {
                    author_id: 9,
                    name: "Stendhal",
                    description: "A foremost French writer of the Romantic era, Stendhal was born Marie-Henri Beyle in Grenoble, France in 1783. A loyal Bonapartist he followed Napoleon closely during his military campaigns Stendhal's novels reflect his intense love of Italy, his political convictions and the moral and ...",
                },
                {
                    author_id: 10,
                    name: "Charles Baudelaire",
                    description: "Charles Baudelaire was a 19th century French poet, translator, and literary/art critic. At his birth, Baudelaire's mother, Caroline Archimbaut-Dufays, was 28; his father Francois Baudelaire was 61. Charles' father instilled in him an appreciation for art, taking his young son to museums and ...",
                },
                {
                    author_id: 11,
                    name: "Marcel Proust",
                    description: 'Marcel Proust was a French intellectual, author and critic, best known for his seven-volume fiction \'In search of Lost Time\'. He coined the term "involuntary memory", which became also known as "Proust effect" in modern psychology.\n\nHe was born Valentin Louis Georges Eugéne Marcel Proust, on July 10, ...',
                },
                {
                    author_id: 12,
                    name: "Giovanni Boccaccio",
                    description: "Giovanni Boccaccio was born in June 1313 in Certaldo, Florence, Tuscany, Italy. He was a writer, known for The Little Hours (2017), Decameron Nights (1953) and Decameron's Jolly Kittens (1972). He died on December 21, 1375 in Certaldo, Florence, Tuscany, Italy.",
                },
                {
                    author_id: 13,
                    name: "Alexander Pushkin",
                    description: "Born to noble parents (his father Sergei was a retired major, and his mother, Nadezhda, was the granddaughter of an ennobled Ethiopian general) on the 26th of May, 1799 in Moscow, Alexander Sergeevich Pushkin became involved with a liberal underground revolutionary group that saw him exiled to the ...",
                },
                {
                    author_id: 14,
                    name: "Jalaluddin Muhammad Rumi",
                    description: "Jalaluddin Rumi, Scholar in Religious Sciences and famed Sufi Mystic Poet, was born on September 29th 1207 A.D. in Balkh (modern day Afghanistan). Escaping Mongol invasions he travelled extensively to Muslim lands, Bagdad, Mecca, Damascus, Malatia (Turkey). Married Gevher Khatun of Samarquand and ...",
                },
                {
                    author_id: 15,
                    name: "Franz Kafka",
                    description: 'Franz Kafka was born into a German-speaking Jewish family in Prague, Austrian Empire, in 1883. His father, Hermann Kafka, was a business owner and a domestic tyrant, frequently abusing his son. Kafka later admitted to his father, "My writing was all about you...". He believed that his father broke ...',
                },
                {
                    author_id: 16,
                    name: "Anton Chekhov",
                    description: "Anton Pavlovich Chekhov was born in 1860, the third of six children to a family of a grocer, in Taganrog, Russia, a southern seaport and resort on the Azov Sea. His father, a 3rd-rank Member of the Merchant's Guild, was a religious fanatic and a tyrant who used his children as slaves. Young Chekhov...",
                },
                {
                    author_id: 17,
                    name: "Gabriel García Márquez",
                    description: "Major Latin-American author of novels and short stories, a central figure in the so-called magical realism movement in Latin American literature. He was awarded the Nobel Prize for literature in 1982. Studied law and journalism in Bogotá and Cartagena. He began his career as a journalist in 1948, ...",
                },
                {
                    author_id: 18,
                    name: "Umberto Eco",
                    description: "He is a professor of semiotics, the study of communication through signs and symbols, at the University of Bologna. Also a philiosopher, a historian, literary critic, and an aesthetician. He is an avid book collector and owns more than 30,000 volumes. The subjects of his scholarly investigations ...",
                },
                {
                    author_id: 19,
                    name: "J.R.R. Tolkien",
                    description: "English writer, scholar and philologist, Tolkien's father was a bank manager in South Africa. Shortly before his father died (1896) his mother took him and his younger brother to his father's native village of Sarehole, near Birmingham, England. The landscapes and Nordic mythology of the Midlands ...",
                },
                {
                    author_id: 20,
                    name: "William Faulkner",
                    description: 'William Faulkner, one of the 20th century\'s most gifted novelists, wrote for the movies in part because he could not make enough money from his novels and short stories to support his growing number of dependants. The author of such acclaimed novels as "The Sound and the Fury" and "Absalom, Absalom...',
                },
                {
                    author_id: 21,
                    name: "Aesop",
                    description: "Greek slave. Many of the 200+ fables attributed to him may not have been his own, but since his name is synonymous with fables they were credited to him anyway. Sentenced to death for heresy. Was thrown from the edge of a cliff, c. 560 BC. The excepted dates of his birth and death would mean that ...",
                },
                {
                    author_id: 22,
                    name: "Arthur Rimbaud",
                    description: "Arthur Rimbaud was born on October 20, 1854 in Charleville-Mézières, Ardennes, France. He was a writer, known for A Big Grey-Blue Bird (1970), Ardiente paciencia (1983) and Criminal Lovers (1999). He died on November 10, 1891 in Marseille, Bouches-du-Rhône, France.",
                },
                {
                    author_id: 23,
                    name: "Aristophanes",
                    description: 'Ancient Greek poet and comic dramatist Aristophanes was the son of Philippus of Athens. A leading exponent of the Athenian "Old Comedy," Aristophanes lived most of his life during the Peloponnesian War against Sparta (431-404). Some of his works include "Acharnians" (425), "Knights" (424), "In the ...',
                },
                {
                    author_id: 24,
                    name: "Ivan Turgenev",
                    description: "Ivan Turgenev was born into a wealthy landowning family with many serfs, in the city of Oryol in Southern Russia. His father, a cavalry colonel, died when he was 15, and he was raised by his abusive mother, who ruled her 5000 serfs ruthlessly with a whip. He never married, but fathered a daughter ...",
                },
                {
                    author_id: 25,
                    name: "Sophocles",
                    description: "Versatile Greek poet and tragic dramatist. He was the son of Sophilus, a wealthy arms manufacturer. Sophocles studied tragedy under Aeschylus, whom he subsequently defeated in the dramatic festival of 468 BC, thus gaining his first victory at these competitions. He became a general under Nicias and...",
                },
                {
                    author_id: 26,
                    name: "Molière",
                    description: "Born between January 13 and January 15 of the year 1622, from a 25yo tapestry-maker, Jean Poguelin (who worked for the King of France from 1631), and a 20yo woman, Marie Cresé, in Paris, Jean-Baptiste Poquelin lost his mother when he was 10. From 1638 to 1640, he studied in the Jesuit college of ...",
                },
                {
                    author_id: 27,
                    name: "Charles Dickens",
                    description: "Charles Dickens' father was a clerk at the Naval Pay Office, and because of this the family had to move from place to place: Plymouth, London, Chatham. It was a large family and despite hard work, his father couldn't earn enough money. In 1823 he was arrested for debt and Charles had to start ...",
                },
                {
                    author_id: 28,
                    name: "Maxim Gorky",
                    description: "Maksim Gorky is a pseudonym of Aleksei Maksimovich Peshkov, who was born into a poor Russian family in Nizhnii Novgorod on Volga river. Gorky lost his father at an early age, he was beaten by his stepfather and became an orphan at age 9, when his mother died. He was brought up by his grandmother, ...",
                },
                {
                    author_id: 29,
                    name: "George Orwell",
                    description: "Born the son of an Opium Agent in Bengal, Eric Blair was educated in England (Eton 1921). The joined the British Imperial Police in Burma, serving until 1927. He then travelled around England and Europe, doing various odd jobs to support his writing. By 1935 he had adopted the 'pen-name' of 'George...",
                },
                {
                    author_id: 30,
                    name: "Edgar Allan Poe",
                    description: "Edgar Allan Poe was born on January 19, 1809, in Boston, Massachusetts. His father, named David Poe Jr., and his mother, named Elizabeth Arnold Hopkins Poe, were touring actors. Both parents died in 1811, and Poe became an orphan before he was 3 years old. He was adopted by John Allan, a tobacco ...",
                },
                {
                    author_id: 31,
                    name: "Publius Vergilius Maro",
                    description: "Publius Vergilius Maro was born on October 15, 70 in Andes, Italy. Publius Vergilius was a writer, known for Troy: The Resurrection of Aeneas (2018), Great Performances (1971) and The Metropolitan Opera HD Live (2006). Publius Vergilius died on September 21, 19 in Brundisium [now Brindisi, Italy].",
                },
                {
                    author_id: 32,
                    name: "Julio Cortázar",
                    description: 'One of the most important Argentinian writers of all time, Julio Cortazar was born in Belgium. When he was a child he went with his parents to Argentina. She stayed in Buenos Aires until 1951, when he went to Paris and he stayed in France until his death. His first book of short stories was "...',
                },
                {
                    author_id: 33,
                    name: "Nazim Hikmet",
                    description: "Nazim Hikmet was born on January 15, 1902 in Salonica, Ottoman Empire [now Thessaloniki, Greece]. He was a writer and director, known for Wings of Desire (1987), Günese dogru (1937) and Dügün gecesi (1933). He was previously married to Wera Tuljakowa, Münevver and Piraye. He died on ...",
                },
                {
                    author_id: 34,
                    name: "Oscar Wilde",
                    description: "A gifted poet, playwright and wit, Oscar Wilde was a phenomenon in 19th-century England. He was illustrious for preaching the importance of style in life and art, and of attacking Victorian narrow-mindedness.\n\nWilde was born in Dublin, Ireland, in 1854. He studied at Trinity College in Dublin before ...",
                },
                {
                    author_id: 35,
                    name: "Jean de La Fontaine",
                    description: "Born in July 8, 1621, in Château-Thierry (Champagne, France), where his father was in charge of Water, Forests and Hunting, Jean de la Fontaine spent his whole childhood and adolescence in the countryside, where he mainly studied Latin language. In 1641, he moved to Paris to continue his study at ...",
                },
                {
                    author_id: 36,
                    name: "Rainer Maria Rilke",
                    description: "Rainer Maria Rilke was born in Prague on the 4th of December 1878 as the son of a military man working with railroads. After he visited a military Upper School he tried to avoid the army and did the preparations for the final exams and the final exams in private. He went to university to study ...",
                },
                {
                    author_id: 37,
                    name: "Lord Byron",
                    description: 'Lord Byron seemed destined from birth to tragedy. His father was the handsome but feckless Captain John "Mad Jack" Byron and his mother the Scottish heiress Catherine Gordon, the only child of the Laird of Gight.\n\nCaptain Byron abandoned his wife and child leaving Catherine to bring up young Byron on...',
                },
                {
                    author_id: 38,
                    name: "Hans Christian Andersen",
                    description: "H.C. Andersen was born in 1805. His father (Hans Andersen) was a poor shoemaker and his mother a washerwoman. The family did not have a permanent address until 1807. The family lived for the first time together at Munkemøllestræde. The father worked as an independent shoemaker, with a workshop in ...",
                },
                {
                    author_id: 39,
                    name: "Thomas Mann",
                    description: 'Thomas Mann was probably Germany\'s most influential author of the 20th century, receiving the Nobel Prize in Literature in 1929. Born on 6 June 1875 in Lübeck, his family moved to Munich in 1893, where he lived until 1933 and wrote some of his most successful novels like "Buddenbrocks" (1901), "...',
                },
                {
                    author_id: 40,
                    name: "Alexandre Dumas",
                    description: 'His paternal grandparents were Marie Cessete Dumas (a Haitian slave) and Marquis Antoine Davy de la Pailleterie. Antoine disapproved of their son, Thomas-Alexandre, joining the French army under the "Davy de la Pailleterie" name, so Thomas-Alexandre used his mother\'s surname instead. He became a ...',
                },
                {
                    author_id: 41,
                    name: "James Joyce",
                    description: "Joyce was born at 41 Brighton Square, Rathgar, Dublin, on 2 February 1882. His father invested unwisely, and the family's fortunes declined steadily. Joyce graduated from University College Dublin (UCD), in 1902. He briefly studied medicine in Paris but his mother's impending death from cancer ...",
                },
                {
                    author_id: 42,
                    name: "Louis-Ferdinand Céline",
                    description: "Louis-Ferdinand Céline was born on May 27, 1894 in Courbevoie, Seine [now Hauts-de-Seine], France. He was a writer and actor, known for Die Nacht (1985), Contes modernes (1979) and Assassins: A Film Concerning Rimbaud (1985). He was previously married to Lucette Almanzor and Edith Follet. He died ...",
                },
                {
                    author_id: 43,
                    name: "Boris Pasternak",
                    description: "Boris Pasternak was born in Moscow on February 10, 1890 into an artistic family of Russian-Jewish heritage. His father was an acclaimed artist named Leonid Pasternak, who converted to Christianity, and his mother was a renown concert pianist named Rosa Kaufman. Their home was open to family friends...",
                },
                {
                    author_id: 44,
                    name: "Federico García Lorca",
                    description: "Federíco Garcia Lorca was born in the south of Spain (Andalusia) in 1898 and soon became the region's most famous artist. A poet, playwright, artist, musician and lecturer, he wrote groundbreaking plays such as 'Blood Wedding' and 'Yerma'. His support of the Spanish Republic in the 1930s led to his...",
                },
                {
                    author_id: 45,
                    name: "Pablo Neruda",
                    description: 'Pablo Neruda was the pseudonym of Chilean poet Ricardo Neftali Reyes Basualto. He was born in Parral, a little town in central Chile, but his family moved to Temuco City when he was just a few months old. It was there he showed interest in poetry and made his early works, and where he picked "Pablo...',
                },
                {
                    author_id: 46,
                    name: "Borges",
                    description: "Borges is known for Mil Adultérios (1910).",
                },
                {
                    author_id: 47,
                    name: "Beaumarchais",
                    description: "Beaumarchais was born on January 24, 1732 in Paris, France. Beaumarchais was a writer, known for The Rules of the Game (1939), The Barber of Seville (1938) and The Marriage of Figaro (1949). Beaumarchais was previously married to Marie-Thérèse Willermawlaz, Geneviève Wattebled Lévêque and Madeleine...",
                },
                {
                    author_id: 48,
                    name: "Najeeb Mahfouz",
                    description: "Najeeb Mahfouz was born on December 11, 1911 in Cairo, Egypt. He was a writer, known for The Tough (1957), The Monster (1954) and Saladin (1963). He was previously married to Atiyyatallah Ibrahim. He died on August 30, 2006 in Cairo, Egypt.",
                },
                {
                    author_id: 49,
                    name: "Ursula K. Le Guin",
                    description: "Ursula K. Le Guin was born on October 21, 1929 in Berkeley, California, USA. She was a writer, known for Tales from Earthsea (2006), The Lathe of Heaven (1980) and The Telling. She was previously married to Charles A. Le Guin. She died on January 22, 2018 in Portland, Oregon, USA.",
                },
                {
                    author_id: 50,
                    name: "Nikolay Gogol",
                    description: "Nikolai (Mykola) Gogol was a Russian humorist, dramatist, and novelist of Ukrainian origin. His ancestors were bearing the name of Gogol-Janovsky and claimed belonging to the upper class Polish Szlachta. Gogol's father, a Ukrainian writer living on his old family estate, had five other children. He...",
                },
                {
                    author_id: 51,
                    name: "Honoré de Balzac",
                    description: "Honoré de Balzac was a French writer whose works have been made into films, such as, Cousin Bette (1998) starring Jessica Lange, and television serials, such as, _Cousin Bette (1971 TV mini-series)_, starring Margaret Tyzack and Helen Mirren.\n\nHe was born on March 20, 1799, in Tours, France. His ...",
                },
                {
                    author_id: 52,
                    name: "Ernest Hemingway",
                    description: "Ernest Hemingway was an American writer who won the Pulitzer Prize (1953) and the Nobel Prize in Literature (1954) for his novel The Old Man and the Sea, which was made into a 1958 film The Old Man and the Sea (1958).\n\nHe was born into the hands of his physician father. He was the second of six ...",
                },
                {
                    author_id: 53,
                    name: "Neil Gaiman",
                    description: "Neil Gaiman is an English author of short fiction, novels, comic books, graphic novels, audio theatre, and films. He is best known for the comic book series The Sandman and novels Stardust, American Gods, Coraline, and The Graveyard Book.\n\nAs a child and a teenager, Gaiman read the works of C. S. ...",
                },
                {
                    author_id: 54,
                    name: "Jean Racine",
                    description: "Jean-Baptiste Racine (22 December 1639 - 21 April 1699) was a French dramatist, one of the three great playwrights of 17th-century France, along with Molière and Corneille as well as an important literary figure in the Western tradition and world literature. Racine was primarily a tragedian, ...",
                },
                {
                    author_id: 55,
                    name: "Albert Camus",
                    description: "Albert Camus was born on November 7, 1913, in Mondovi, Algeria. His parents were Spanish-French-Algerian (pied noir) colonists. His father, Lucien, died in the Battle of Marne (1914) during WWI. His mother, named Catherine Helene Sintes was of Spanish origin, she was a deaf mute due to a stroke, ...",
                },
                {
                    author_id: 56,
                    name: "Jean-Paul Sartre",
                    description: "Jean-Paul Charles-Aymard Sartre was born on June 21, 1905, in Paris, France. His father, Jean-Baptiste Sartre, was an officer in the French Navy. His mother, Anne-Marie Schweitzer, was the cousin of Nobel Prize laureate Dr. Albert Schweitzer. Sartre was one year old when his father died. He was ...",
                },
                {
                    author_id: 57,
                    name: "Chingiz Aitmatov",
                    description: "Chingiz Aitmatov was a Russian-Kyrgyz writer and statesman known for such films as The First Teacher (1965), The Girl with the Red Scarf (1977) and Jamila (1994).\n\nHe was born Chingiz Torekulovich Aitmatov on December 12, 1928, in Kirgizia, Soviet Union. His family was bilingual, Russian-Kyrgyz. His ...",
                },
                {
                    author_id: 58,
                    name: "John Steinbeck",
                    description: "John Steinbeck was the third of four children and the only son born to John Ernst and Olive Hamilton Steinbeck. His father was County Treasurer and his mother, a former schoolteacher. John graduated from Salinas High School in 1919 and attended classes at Stanford University, leaving in 1925 ...",
                },
                {
                    author_id: 59,
                    name: "Milan Kundera",
                    description: "Milan Kundera was born on April 1st 1929 in Brno, Czechoslovakia. He wrote his first poems during his high school years. After World War II he worked as a jazz musician before going to college. He studied music, film and literature at university in Prague. He moved on to become a professor at the ...",
                },
                {
                    author_id: 60,
                    name: "Jules Verne",
                    description: 'Jules Gabriel Verne (1828-1905) was one of the most famous French novelists of all time. His major work is the "Extraordinary Journeys", a series of more than sixty adventure novels including "Journey to the Center of the Earth", "Around the World in 80 Days", "20.000 Leagues under the Seas" and "...',
                },
                {
                    author_id: 61,
                    name: "Mark Twain",
                    description: "Mark Twain, born Samuel Langhorne Clemens in Florida, Missouri in 1835, grew up in Hannibal. He was a steamboat pilot on the Mississippi River. Throughout his career, Twain served as a writer, lecturer, reporter, editor, printer, and prospector. Twain took his pen name from an alert cry used on his...",
                },
                {
                    author_id: 62,
                    name: "Francois Rabelais",
                    description: "François Rabelais was a French Renaissance writer, physician, Renaissance humanist, monk and Greek scholar. He is primarily known as a writer of satire, of the grotesque, and of bawdy jokes and songs.\n\nEcclesiastical and anticlerical, Christian and considered by some as a free thinker, a doctor and ...",
                },
                {
                    author_id: 63,
                    name: "Yasar Kemal",
                    description: "Yasar Kemal was born on October 6, 1923 in Osmaniye, Adana, Turkey. He was a writer, known for The Fallow Deer (1958), Tus (1955) and The Enemy of Chastity (1957). He was previously married to Ayse Semiha Baban and Thilda Serrero. He died on February 28, 2015 in Istanbul, Turkey.",
                },
                {
                    author_id: 64,
                    name: "George Bernard Shaw",
                    description: 'The Anglo-Irish playwright George Bernard Shaw (1856-1950), winner of the Nobel Prize for Literature in 1925, acquired a reputation as the greatest dramatist in the English language during the first half of the 20th Century for the plays he had written at the height of his creativity from "Mrs. ...',
                },
                {
                    author_id: 65,
                    name: "Arthur Conan Doyle",
                    description: 'Arthur Conan Doyle was a British writer of Irish descent, considered a major figure in crime fiction. His most famous series of works consisted of the "Sherlock Holmes" stories (1887-1927), consisting of four novels and 56 short stories. His other notable series were the "Professor Challenger" ...',
                },
                {
                    author_id: 66,
                    name: "Jane Austen",
                    description: "Jane Austen was born on December 16th, 1775, to the local rector, Rev. George Austen (1731-1805), and Cassandra Leigh (1739-1827). She was the seventh of eight children. She had one older sister, Cassandra. In 1783 she went to Southampton to be taught by a relative, Mrs. Cawley, but was brought ...",
                },
                {
                    author_id: 67,
                    name: "Geoffrey Chaucer",
                    description: "Geoffrey Chaucer was born in 1343 in London, England, UK. He was a writer. He was previously married to Philippa Roet. He died on October 25, 1400 in London, England.",
                },
                {
                    author_id: 68,
                    name: "Antoine de Saint-Exupéry",
                    description: "Antoine de Saint-Exupéry was born into a family of old provincial nobility. Failing his final exams at a preparatory school, he entered the École des Beaux-Arts to study architecture. In 1921, he began military service in the 2nd Regiment of Chasseurs, and sent to Strasbourg for pilot training. The...",
                },
                {
                    author_id: 69,
                    name: "Erich Maria Remarque",
                    description: "The German novelist Erich Maria Remarque was born in Osnabrück in 1898. His first novel, the famous anti-war epic All Quiet on the Western Front (1930), was written based on his experiences as a soldier in WWI, and published in 1929. He moved to Switzerland until 1939 and later emigrated to the US....",
                },
                {
                    author_id: 70,
                    name: "J.D. Salinger",
                    description: 'U.S. writer whose novel "The Catcher in the Rye" (1951) won critical acclaim and devoted admirers, especially among the post-World War II generation of college students. His entire corpus of published works consists of that one novel and 13 short stories, all originally written in the period 1948-...',
                },
                {
                    author_id: 71,
                    name: "Virginia Woolf",
                    description: "London-born Virginia Woolf came from a wealthy family and, unlike her brothers, received her education at home, an unusual step for the times. Her parents had both had children from previous marriages, so she grew up with a variety of siblings, stepbrothers and stepsisters. Her father was a ...",
                },
                {
                    author_id: 72,
                    name: "Louis Aragon",
                    description: "Louis Aragon was born on October 3, 1897, in Paris, France. He graduated from Lycée Carnot, then studied medicine in Sorbonne and befriended a fellow medical student André Breton. In 1917 he was drafted in the First World War and served in a military hospital. There he met Guillaume Apollinaire and...",
                },
                {
                    author_id: 73,
                    name: "Herman Melville",
                    description: "Herman Melville was an American novelist, short story writer, and poet of the American Renaissance period. Among his best-known works are Moby-Dick (1851); Typee (1846), a romanticized account of his experiences in Polynesia; and Billy Budd, Sailor, a posthumously published novella. Although his ...",
                },
                {
                    author_id: 74,
                    name: "Alphonse Daudet",
                    description: "Alphonse Daudet was born on May 13, 1840 in Nîmes, France. He was a writer, known for Sapho (1934), Sapho (1917) and Sapho (1913). He was previously married to Julia Allard. He died on December 16, 1897 in Paris, France.",
                },
                {
                    author_id: 75,
                    name: "Mikhail Sholokhov",
                    description: "Mikhail Sholokhov was a Russian writer who received a Nobel prize for his epic novel 'Tikhiy Don'.\n\nHe was born in 1905 into a Cossack family of farmers in Kruzhilin, Veshenskaya, Rostov province in Southern Russia. His high school studies were interrupted by the Russian revolution and the Civil War, ...",
                },
                {
                    author_id: 76,
                    name: "Stefan Zweig",
                    description: "Stefan Zweig was born on November 28, 1881 in Vienna, Austria-Hungary [now Austria]. He was a writer, known for The Grand Budapest Hotel (2014), Letter from an Unknown Woman (1948) and Marie Antoinette (1938). He was previously married to Friderike Maria Burger von Winternitz and Charlotte E. ...",
                },
                {
                    author_id: 77,
                    name: "José Saramago",
                    description: "José Saramago was born on November 16, 1922 in Azinhaga, Golega, Portugal. He was a writer and actor, known for Enemy (2013), Blindness (2008) and O Evangelho Segundo Jesus Cristo. He was previously married to Pilar del Río and Ilda Reis. He died on June 18, 2010 in Lanzarote, Las Palmas, Canary ...",
                },
                {
                    author_id: 78,
                    name: "Bertolt Brecht",
                    description: 'Bertolt Brecht was born on 10 February 1898 in Augsburg, Germany and one of the country\'s most influential poets, playwrights and screenwriters. His most famous work was the musical "The Threepenny Opera" (with Kurt Weill), but his dramas such as "Mother Courage and Her Children" or "The Good ...',
                },
                {
                    author_id: 79,
                    name: "Mario Vargas Llosa",
                    description: "Mario Vargas Llosa was born on March 28, 1936 in Arequipa, Peru. He is a writer and director, known for Pantaleon (1976), Captain Pantoja and the Special Services (1999) and Travesuras de la Niña Mala (2022). He has been married to Patricia Llosa since 1965. He was previously married to ...",
                },
                {
                    author_id: 80,
                    name: "T.S. Eliot",
                    description: "T.S. Eliot ranks with William Butler Yeats as the greatest English language poet of the 20th Century and was certainly the most influential. He was born Thomas Stearns Eliot into the bosom of a respectable middle class family on September 26, 1888 in St. Louis, Missouri. The family had roots in New...",
                },
                {
                    author_id: 81,
                    name: "Guy de Maupassant",
                    description: "Guy de Maupassant was born on August 5, 1850 in Château de Miromesnil, France. He was a writer, known for La criada de la granja (1953), Masculine Feminine (1966) and Black Sabbath (1963). He died on July 6, 1893 in Paris, France.",
                },
                {
                    author_id: 82,
                    name: "John Keats",
                    description: "John Keats (31 October 1795 - 23 February 1821) was an English poet of the second generation of Romantic poets, with Lord Byron and Percy Bysshe Shelley, although his poems had been in publication for less than four years when he died of tuberculosis at the age of 25. They were indifferently ...",
                },
                {
                    author_id: 83,
                    name: "Sabahattin Ali",
                    description: "Sabahattin Ali was born in Komotini, Greece, 1917; and assassinated in Kirklareli, Turkey, 1948. He worked as a teacher in Yozgat, Aydin, Konya and Ankara for couple of years. In 1945, Ali started to publish humorous and opposing magazine Marko Pasa. He arrested in 1948 for an article and sentenced...",
                },
                {
                    author_id: 84,
                    name: "Ahmet Hamdi Tanpinar",
                    description: "Ahmet Hamdi Tanpinar was born on June 23, 1901 in Constantinople, Ottoman Empire [now Istanbul, Turkey]. He was a writer, known for Where's Firuze? (2004), A Passing Summer's Rain (1994) and Geçmis Zaman Elbiseleri (1975). He died on January 24, 1962 in Istanbul, Turkey.",
                },
                {
                    author_id: 85,
                    name: "John Fante",
                    description: "John Fante was born on April 8, 1909 in Boulder, Colorado, USA. He was a writer, known for Full of Life (1956), The Golden Fleecing (1940) and My Man and I (1952). He was previously married to Joyce H. Smart. He died on May 8, 1983 in Los Angeles, California, USA.",
                },
                {
                    author_id: 86,
                    name: "Henri-Frédéric Blanc",
                    description: "Henri-Frédéric Blanc is known for Wild Games (1997) and Jeu de massacre ou le blues des fadas (1996).",
                },
                {
                    author_id: 87,
                    name: "Isaac Asimov",
                    description: "Isaac Asimov was born Isaak Judah Ozimov, on January 2, 1920, in Petrovichi shtetl, near Smolensk, Russia. He was the oldest of three children. His father, named Judah Ozimov, and his mother, named Anna Rachel Ozimov (nee Berman), were Orthodox Jews. Ozimov family were millers (the name Ozimov ...",
                },
                {
                    author_id: 88,
                    name: "Fitzgerald Scott",
                    description: "Fitzgerald Scott is known for Young Cesar (2007) and Charlotte Church: Crazy Chick (2005).",
                },
                {
                    author_id: 89,
                    name: "J.M. Coetzee",
                    description: "J.M. Coetzee was born on February 9, 1940 in Cape Town, South Africa. He is a writer, known for Waiting for the Barbarians (2019), Dust (1985) and Disgrace (2008).",
                },
                {
                    author_id: 90,
                    name: "Kazuo Ishiguro",
                    description: "Kazuo Ishiguro was born on November 8, 1954 in Nagasaki, Japan. He is a writer and producer, known for The Remains of the Day (1993), Never Let Me Go (2010) and Living (2022). He has been married to Lorna Anne MacDougall since 1986. They have one child.",
                },
                {
                    author_id: 91,
                    name: "Hermann Hesse",
                    description: "Hermann Hesse was born on July 2, 1877 in Calw, Germany. He was a writer, known for The Hours (2002), Siddhartha (1972) and Steppenwolf (1974). He was previously married to Ninon Ausländer, Ruth Wenger and Maria Bernoulli. He died on August 9, 1962 in Montagnola, Switzerland.",
                },
                {
                    author_id: 92,
                    name: "Robert Louis Stevenson",
                    description: 'Robert Louis Stevenson was a Scottish novelist, poet, and travel writer from Edinburgh. His most popular works include the pirate-themed adventure novel "Treasure Island" (1883), the poetry collection "A Child\'s Garden of Verses" (1885), the Gothic horror novella "Strange Case of Dr Jekyll and Mr ...',
                },
                {
                    author_id: 93,
                    name: "Salman Rushdie",
                    description: 'He married the actress Padma Lakshmi, the hostess of "Padma\'s Passport," and dedicatee of his eighth novel, "Fury" (2001), on 17th April 2004. The late Ayatollah Khomeini declared a fatwa against him for the novel "The Satanic Verses" on 14th February 1989. He is currently completing a ninth novel....',
                },
                {
                    author_id: 94,
                    name: "Mario Vargas Llosa",
                    description: "Mario Vargas Llosa was born on March 28, 1936 in Arequipa, Peru. He is a writer and director, known for Pantaleon (1976), Captain Pantoja and the Special Services (1999) and Travesuras de la Niña Mala (2022). He has been married to Patricia Llosa since 1965. He was previously married to ...",
                },
                {
                    author_id: 95,
                    name: "Aldous Huxley",
                    description: 'Aldous Leonard Huxley was born on July 26, 1894, at Laleham in Godalming, Surrey, England. He was the third of four children. His brother Julian Huxley was a biologist known for his theories of evolution. His grandfather, named Thomas Henry Huxley, was a naturalist known as "Darwin\'s Bulldog." His ...',
                },
                {
                    author_id: 96,
                    name: "Paul Valéry",
                    description: "Paul Valéry was born on October 30, 1871 in Cette [now Sète], Herault, France. He was a writer, known for Auf der Lesebühne der Literarischen Illustrierten (1965), L'ippogrifo (1974) and Paul Valéry (1960). He was previously married to Jeannie Gobillard. He died on July 20, 1945 in ...",
                },
                {
                    author_id: 97,
                    name: "Thomas Pynchon",
                    description: "Thomas Pynchon was born on May 8, 1937 in Glen Cove, Long Island, New York, USA. He is a writer and actor, known for Inherent Vice (2014), Prüfstand VII (2002) and Thomas Pynchon: A Journey Into the Mind of P. (2002). He has been married to Melanie Jackson since 1991. They have one child.",
                },
                {
                    author_id: 98,
                    name: "H.P. Lovecraft",
                    description: "Born in Providence, Lovecraft was a sickly child whose parents died insane. When he was 16, he wrote the astronomy column in the Providence Tribune. Between 1908 and 1923, he wrote short stories for Weird Tales magazine, among others. He died in Providence, in poverty, on March 15, 1937. His most ...",
                },
                {
                    author_id: 99,
                    name: "Haruki Murakami",
                    description: "Haruki Murakami graduated from Waseda University, Tokyo, in 1975. Widely considered one of Japan's most important 20th-century novelists. His often solitary, withdrawn, and world-weary protagonists are generally stripped of Japanese tradition. Frequently called postmodern, his fiction, which often ...",
                },
                {
                    author_id: 100,
                    name: ". Nikos Kazantzakis",
                    description: 'Nikos Kazantzakis was born in Heraklion, Crete (Greece). He studied Law in Athens and in Paris, but soon he studied philosophy and literature. He travelled almost everywhere; he learnt many foreign languages and left his scientific research for Nitsche. At philosophy: "Ascetics" (Salvatores Dei, ...',
                },
            ]);
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            return queryInterface.bulkDelete("Author", {
                author_id: { [sequelize_1.Op.between]: [1, 100] },
            });
        });
    },
};
