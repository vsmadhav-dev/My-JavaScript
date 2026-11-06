# My JavaScript

This repository is a collection of browser mini-apps, JavaScript algorithm exercises, data-management simulations, and small language experiments. Open the catalog with [`index.html`](index.html) to browse every project.

## Browser projects

These projects have an HTML interface and can be opened directly in a browser.

| Project | Entry point | Implementation | Function |
| --- | --- | --- |
| Regex Sandbox | [`RegExSandbox.html`](RegExSandbox.html) | [`RegExSandBox.js`](RegExSandBox.js) | Tests a regular expression against editable text with `i` and `g` flags, then highlights matches or reports invalid patterns. |
| Coding Checklist | [`checklist.html`](checklist.html) | [`checklist.js`](checklist.js) | Renders checklist items and lets visitors toggle each item’s favorite state. |
| Emoji Reactor | [`emoji.html`](emoji.html) | [`emojiReactor.js`](emojiReactor.js) | Records emotion ratings from four emoji buttons and caps each counter at 10 votes. |
| Library Book Search | [`librarySearch.html`](librarySearch.html) | [`librarySearch.js`](librarySearch.js) | Searches a hard-coded library by exact title and displays the matching book details. |
| Mode Toggler | [`mode.html`](mode.html) | [`mode.js`](mode.js) | Switches the page between light and dark modes through a button-controlled class change. |
| Palindrome Checker | [`plaindiromeChecker.html`](plaindiromeChecker.html) | [`palindrome.js`](palindrome.js), [`plaindrome_checker.js`](plaindrome_checker.js) | Normalizes user input and reports whether a word, phrase, or number reads the same backwards. |
| Random Background Color | [`random.html`](random.html) | [`random.js`](random.js) | Generates a dark color, applies it to the page, and displays the resulting hex code. |
| Storytelling App | [`story.html`](story.html) | [`story.js`](story.js) | Lets visitors choose a genre and displays a random scary, funny, or adventure story. |
| Number Guesser | [`legacy-index.html`](legacy-index.html) | [`number_gusser.js`](number_gusser.js) | Prompts for a number from 1–50, compares the guess with a random target, and reports the result. |

## Data, simulations, and applications

| Project | File | Function |
| --- | --- | --- |
| Library Catalog | [`Library-Catalog.js`](Library-Catalog.js) | Parses catalog-card strings and searches normalized records by author. |
| Library Manager | [`libraryManager.js`](libraryManager.js) | Prints book details, summaries, author matches, and total pages. |
| Book Organiser | [`bookOrganiser.js`](bookOrganiser.js) | Filters books released after 2000 and sorts them by year. |
| Inventory Management System | [`inventoryManagemntSystem.js`](inventoryManagemntSystem.js) | Adds products, tracks stock, and removes requested quantities. |
| Pantry Restocker | [`pantryRestocker.js`](pantryRestocker.js) | Parses shipments and plans restock, donation, or discard actions by zone. |
| Record Manager | [`record-manger.js`](record-manger.js) | Updates album properties and tracks in an in-memory record collection. |
| Playlist Remix Engine | [`playlistRemixEngine.js`](playlistRemixEngine.js) | Flattens playlists, scores tracks, removes duplicates, and enforces artist quotas. |
| Crowd Flow Management | [`crowdFlowManagementSystem.js`](crowdFlowManagementSystem.js) | Simulates festival gate throughput and reroutes queue overflow. |
| Space Mission Roster | [`space_mission-roaster.js`](space_mission-roaster.js) | Manages astronaut crews, priorities, swaps, EVA readiness, and crew chunks. |
| Quiz App Logic | [`quiz_app.js`](quiz_app.js) | Selects a random question and choice, then reports the result. |
| Grade Book | [`gradeBook.js`](gradeBook.js) | Calculates averages, letter grades, and passing status. |
| Profile Lookup | [`profileLookup.js`](profileLookup.js) | Finds a contact property and returns useful missing-data messages. |
| User/Admin Classes | [`user.js`](user.js) | Demonstrates shared data, inheritance, and admin updates. |
| Cat Facts | [`facts.js`](facts.js) | Fetches and logs a cat fact from an external API. |

## Array and collection exercises

| Project | File | Function |
| --- | --- | --- |
| Two Smallest Sum | [`SumArr.js`](SumArr.js) | Adds the two smallest numbers in an array. |
| Chunky Array | [`chunkyAlgo.js`](chunkyAlgo.js) | Splits an array into fixed-size groups. |
| Element Skipper | [`elementSkipper.js`](elementSkipper.js) | Drops leading elements until a predicate succeeds. |
| Falsy Remover | [`falsyRemover.js`](falsyRemover.js) | Removes falsy values from an array. |
| Largest Numbers | [`largestNum.js`](largestNum.js) | Finds the largest number in each nested array. |
| Matching Object Filter | [`matchingObjectFilter.js`](matchingObjectFilter.js) | Filters objects matching every property in a query object. |
| Mutation Algorithm | [`mutationAlgorithm.js`](mutationAlgorithm.js) | Checks whether all characters in one string occur in another. |
| Spacey Array | [`spacey.js`](spacey.js) | Builds cumulative string prefixes. |
| Franken Splice | [`spliceago.js`](spliceago.js) | Inserts one array into another at an index. |
| Steamroller | [`steamRollArray.js`](steamRollArray.js) | Recursively flattens nested arrays. |
| Symmetric Difference | [`symmetricalArray.js`](symmetricalArray.js) | Returns values present in only one of two arrays. |
| Truth Finder | [`truthChecker.js`](truthChecker.js) | Returns the first element satisfying a predicate. |
| Unique Union | [`uniqueSortedArray.js`](uniqueSortedArray.js) | Combines arrays while preserving first-seen unique values. |
| Value Remover | [`valueRemover.js`](valueRemover.js) | Removes specified values from an array. |
| Truthy Validator | [`allTruthyValidator.js`](allTruthyValidator.js) | Checks whether every object has a truthy property. |
| Sum All | [`sumAll.js`](sumAll.js) | Sums every integer between two endpoints. |
| Sum Fibonacci Numbers | [`sumFibs.js`](sumFibs.js) | Sums odd Fibonacci numbers up to a limit. |
| Sorted Index Finder | [`sortedIndexFinder.js`](sortedIndexFinder.js) | Finds an insertion index in a sorted array. |
| Paper Wrapper | [`paperWrapper.js`](paperWrapper.js) | Calculates the amount of paper needed to wrap boxes. |

## String, text, and formatting exercises

| Project | File | Function |
| --- | --- | --- |
| Acronym Maker | [`acroynymMaker.js`](acroynymMaker.js) | Builds an acronym from word initials. |
| Dynamic Chat Filter | [`dynamicChatFilter.js`](dynamicChatFilter.js) | Replaces banned words in a sample message. |
| Email Masker | [`email-masker.js`](email-masker.js) | Masks the local part of an email while keeping its domain. |
| Extension Extractor | [`extension-extracker.js`](extension-extracker.js) | Extracts the extension after the final period. |
| HTML Entity Converter | [`HTMLentity.js`](HTMLentity.js) | Converts special characters to HTML entities. |
| Longest Word Finder | [`longestWordFinder.js`](longestWordFinder.js) | Finds the length of the longest word. |
| Missing Letter Detector | [`missingLetterDetector.js`](missingLetterDetector.js) | Finds the first missing letter in an alphabetic sequence. |
| Name Swapper | [`name_swapper.js`](name_swapper.js) | Reverses the order of name parts. |
| Nerdify | [`nerdify.js`](nerdify.js) | Applies simple leetspeak substitutions. |
| Number Masker | [`number_masker.js`](number_masker.js) | Masks all but the final four digits. |
| Proof Reading | [`proofReading.js`](proofReading.js) | Detects non-palindromic words and repeated phrases. |
| Sentence Analyzer | [`sentence_Analyzer.js`](sentence_Analyzer.js) | Counts vowels, consonants, punctuation, and words. |
| Title Case | [`titleCase.js`](titleCase.js) | Converts words to title case. |
| URL Cleaner | [`url_cleaner.js`](url_cleaner.js) | Removes a URL protocol prefix. |
| Palindrome Function | [`plaindrome_checker.js`](plaindrome_checker.js) | Checks whether a string equals its reverse. |
| String Repeater | [`stringrepeater.js`](stringrepeater.js) | Repeats a string a requested number of times. |

## Mathematics, encoding, and algorithms

| Project | File | Function |
| --- | --- | --- |
| DNA Pairing | [`DNApair.js`](DNApair.js) | Maps DNA bases to their complementary pairs. |
| Factorial Calculator | [`Factorial-calculator.js`](Factorial-calculator.js) | Computes and logs a factorial. |
| LCM Calculator | [`lcmCalculatorRangeBased.js`](lcmCalculatorRangeBased.js) | Calculates GCD and least common multiple for a range. |
| Number Square | [`numberSquare.js`](numberSquare.js) | Squares a supplied number. |
| Text Pyramid | [`pyramid.js`](pyramid.js) | Builds an upright or inverted text pyramid. |
| RSA Demonstration | [`RSAalgo.js`](RSAalgo.js) | Demonstrates toy modular encryption and decryption. |
| Password Generator | [`passwordGenerator.js`](passwordGenerator.js) | Generates a random password-like string. |

## Archived entry point

The original minimal `index.html` was preserved unchanged as [`legacy-index.html`](legacy-index.html). The new `index.html` is the project catalog.
