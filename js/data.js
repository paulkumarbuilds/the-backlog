// The Backlog — subject data
// Every path is relative to the site root (where index.html / subject.html / books.html live).

const SUBJECTS = {

  'cs-401': {
    code: 'CS-401', name: 'Programming in C', credits: 2, type: 'core', sem: 1, status: 'verified',
    syllabus: "An introduction to the process of program design and analysis using the C programming language. Topics include basic data types and operators, I/O, control structures (selection, loops), arrays, strings, structs and unions, dynamic memory allocation (malloc and free), pointers and pointer arithmetic, and files. Some simple sorting and searching algorithms.",    topics: ['Basic data types & operators', 'Input/output', 'Control structures (selection, loops)', 'Arrays & strings', 'Structs & unions', 'Dynamic memory allocation (malloc, free)', 'Pointers & pointer arithmetic', 'File handling', 'Simple sorting & searching algorithms'],
    teachers: [
      { name: 'Dr. Subhash Chandra Patel', rank: 'Assistant Professor', years: '2026', current: true },
      { name: 'Dr. Poonam Agarwal', rank: 'Associate Professor', years: '2024–2025' },
      { name: 'Prof. Piyush Pratap Singh', rank: 'Professor', years: '2022–2023' }
    ],
    notes: [
      "Reference notes on file only cover 2022–23 (Piyush sir) — nothing yet from the 2024–25 or 2026 teachers.",
      "PYQs go back to 2022, covering all three teaching stretches. 2026 PYQ isn't up yet since that year's exam hasn't happened."
    ],
    pyq: [
      { year: '2025', file: 'files/sem1/cs-401/pyq/C-2025.pdf' },
      { year: '2024', file: 'files/sem1/cs-401/pyq/C-2024.pdf' },
      { year: '2023', file: 'files/sem1/cs-401/pyq/C-2023.pdf' },
      { year: '2022', file: 'files/sem1/cs-401/pyq/C-2022.pdf' }
    ],
    referenceNotes: [
      {
        label: '2022–2023', teacher: 'Prof. Piyush Pratap Singh', files: [
          { name: 'Reference Notes', file: 'files/sem1/cs-401/reference-notes/2022-2023/C-reference-notes-2023.pdf' },
          { name: 'Practice Questions', file: 'files/sem1/cs-401/reference-notes/2022-2023/C-practice-questions-2023.pdf' }
        ]
      }
    ],
    studentNotes: [],
    assignments: [
      {
        year: '2025', teacher: 'Dr. Poonam Agarwal', files: [
          { name: 'Assignment 1', file: 'files/sem1/cs-401/assignments/2025/C-assignment-1-2025.pdf' },
          { name: 'Assignment 2', file: 'files/sem1/cs-401/assignments/2025/C-assignment-2-2025.pdf' },
          { name: 'Assignment 3', file: 'files/sem1/cs-401/assignments/2025/C-assignment-3-2025.pdf' }
        ]
      },
      {
        year: '2023', teacher: 'Prof. Piyush Pratap Singh', files: [
          { name: 'Assignment', file: 'files/sem1/cs-401/assignments/2023/C-assignment-2023.pdf' },
          { name: 'Mini Project Topics', file: 'files/sem1/cs-401/assignments/2023/C-mini-project-topics-2023.pdf' }
        ]
      }
    ],
    books: [
      { title: 'The C Programming Language', author: 'Kernighan & Ritchie', file: 'files/sem1/cs-401/books/The C Programming Language Kernighan, Ritchie.pdf' },
      { title: 'Programming in C', author: 'Stephen G. Kochan', file: 'files/sem1/cs-401/books/Programming in C, Stephen G. Kochan.pdf' },
      { title: 'C and Data Structures', author: 'E. Balagurusamy', file: 'files/sem1/cs-401/books/C and Data Structures Balaguruswamy.pdf' },
      { title: 'How to Solve it by Computer', author: 'R.G. Dromey', file: 'files/sem1/cs-401/books/How to Solve it By Computer, Dromey.pdf' }
    ]
  },

  'cs-402': {
    code: 'CS-402', name: 'Computer Fundamentals', credits: 2, type: 'core', sem: 1, status: 'verified',
    syllabus: "Logic gates, Boolean algebra, K-map, map simplification, combinational circuit design (half/full adders, decoders, encoders, multiplexers), sequential circuit design (flip-flops, registers, counters), processor and control logic design, and digital integrated circuit families (RTL, DTL, TTL, ECL, MOS, CMOS).",    topics: ['Logic gates & Boolean algebra', 'K-map & map simplification', 'Combinational circuit design (adders, decoders, encoders, multiplexers)', 'Sequential circuit design (flip-flops, registers, counters)', 'Processor & control logic design', 'Digital IC families (RTL, DTL, TTL, ECL, MOS, CMOS)'],
    teachers: [
      { name: 'Dr. Subhash Chandra Patel', rank: 'Assistant Professor', years: '2026', current: true },
      { name: 'Dr. Poonam Agarwal', rank: 'Associate Professor', years: '2022–2025' }
    ],
    notes: [
      "No reference notes on file yet for this subject — student notes from 2023 are the only material available besides PYQs.",
      "2026 PYQ isn't up yet since that year's exam hasn't happened."
    ],
    pyq: [
      { year: '2025', file: 'files/sem1/cs-402/pyq/CF-2025.pdf' },
      { year: '2024', file: 'files/sem1/cs-402/pyq/CF-2024.pdf' },
      { year: '2023', file: 'files/sem1/cs-402/pyq/CF-2023.pdf' },
      { year: '2022', file: 'files/sem1/cs-402/pyq/CF-2022.pdf' }
    ],
    referenceNotes: [],
    studentNotes: [
      {
        year: '2023', files: [
          { name: 'Handwritten Notes', file: 'files/sem1/cs-402/student-notes/2023/CF-Handwritten-Notes-2023.pdf' }
        ]
      }
    ],
    assignments: [],
    books: [
      { title: 'Digital Logic and Computer Design Fundamentals', author: 'Morris Mano — PHI', file: 'files/sem1/cs-402/books/Digital Logic and Computer Design Fundamental, Morris Mano,PHI.pdf' },
      { title: 'Digital Logic and Computer Design', author: 'M. Morris Mano — Pearson', file: 'files/sem1/cs-402/books/Digital Logic and Computer Design. (M. Morris Mano.) Pearson.pdf' }
    ]
  },

  'cs-403': {
    code: 'CS-403', name: 'Data Structures', credits: 4, type: 'core', sem: 1, status: 'verified',
    syllabus: "Classification of data structures, linear lists, stacks, linked structures, trees (binary, BST, AVL, B-trees, B+ trees), graphs (DFS, BFS, shortest path), algorithm analysis fundamentals, recursion, sorting and searching algorithms, and queues (circular, priority, deque).",    topics: ['Classification of data structures', 'Linear lists, stacks, linked structures', 'Trees (binary, BST, AVL, B-trees, B+ trees)', 'Graphs (DFS, BFS, shortest path)', 'Algorithm analysis fundamentals', 'Recursion', 'Sorting & searching algorithms', 'Queues (circular, priority, deque)'],
    teachers: [
      { name: 'Dr. Buddha Singh', rank: 'Assistant Professor', years: '2026', current: true },
      { name: 'Dr. Tirthankar Gayen', rank: 'Assistant Professor', years: '2022–2025' }
    ],
    notes: [
      "Reference notes (Intro, Linked List, Trees) are from the 2022–25 teaching stretch — nothing yet from 2026.",
      "2026 PYQ not up yet since that year's exam hasn't happened."
    ],
    pyq: [
      { year: '2025', file: 'files/sem1/cs-403/pyq/DS-2025.pdf' },
      { year: '2024', file: 'files/sem1/cs-403/pyq/DS-2024.pdf' },
      { year: '2023', file: 'files/sem1/cs-403/pyq/DS-2023.pdf' },
      { year: '2022', file: 'files/sem1/cs-403/pyq/DS-2022.pdf' }
    ],
    referenceNotes: [
      {
        label: '2022–2025', teacher: 'Dr. Tirthankar Gayen', files: [
          { name: 'Data Structure Introduction', file: 'files/sem1/cs-403/reference-notes/Data-Structure-Intoductions.pdf' },
          { name: 'Linked List', file: 'files/sem1/cs-403/reference-notes/Link-List.pdf' },
          { name: 'Trees', file: 'files/sem1/cs-403/reference-notes/Trees.pdf' }
        ]
      }
    ],
    studentNotes: [],
    assignments: [
      {
        year: '2025', teacher: 'Dr. Buddha Singh', files: [
          { name: 'Assignment', file: 'files/sem1/cs-403/assignments/2025/DS-assignments-2025.pdf' }
        ]
      }
    ],
    books: [
      { title: 'Fundamentals of Data Structures', author: 'Horowitz & Sahni — 1997 Ed.', file: 'files/sem1/cs-403/books/Fundamentals of Data Structures, Horowitz Ellis and Sahni Sartaj 1997.pdf' },
      { title: 'Fundamentals of Data Structures', author: 'Horowitz & Sahni — 1982 Ed.', file: 'files/sem1/cs-403/books/Fundamentals of Data Structures, Horowitz Ellis and Sahni Sartaj 1982.pdf' },
      { title: 'Data Structures and Program Design', author: 'Kruse Robert L.', file: 'files/sem1/cs-403/books/Data Structures and Program Design, Kruse Robert L.pdf' },
      { title: 'Data Structures: A Pseudocode Approach with C', author: 'Gilberg & Forouzan', file: 'files/sem1/cs-403/books/Data Structures A Pseudocode Approach with C, Richard, Forouzan.pdf' }
    ]
  },

  'cs-404': {
    code: 'CS-404', name: 'Discrete Mathematics', credits: 4, type: 'core', sem: 1, status: 'verified',
    syllabus: "Sets, relations, functions, logic operators, propositional and predicate calculus, Boolean algebra, congruence relations, groups and subgroups, error correcting codes, permutations and combinations, generating functions, recurrence relations, trees, graphs, shortest path and spanning tree algorithms, regular expressions, finite state machines, and grammars.",    topics: ['Sets, relations, functions', 'Logic operators, propositional & predicate calculus', 'Boolean algebra', 'Congruence relations, groups & subgroups', 'Error correcting codes', 'Permutations, combinations & generating functions', 'Recurrence relations', 'Trees, graphs, shortest path & spanning tree algorithms', 'Regular expressions & finite state machines', 'Grammars'],
    teachers: [
      { name: 'Prof. Sonajharia Minz', rank: 'Professor', years: '2025–2026', current: true },
      { name: 'Dr. Yogendra Meena', rank: 'Assistant Professor', years: '2024' },
      { name: 'Prof. D.P. Vidyarthi', rank: 'Professor', years: '2022–2023 (PYQ only)' }
    ],
    notes: [
      "No reference notes on file — a set of practice questions from 2025 and handwritten student notes from 2023 are what's available besides PYQs.",
      "The 2023 PYQ predates the current teaching stretch — it's from Prof. D.P. Vidyarthi's year."
    ],
    pyq: [
      { year: '2025', file: 'files/sem1/cs-404/pyq/DM-2025.pdf' },
      { year: '2024', file: 'files/sem1/cs-404/pyq/DM-2024.pdf' },
      { year: '2023', file: 'files/sem1/cs-404/pyq/DM-2023.pdf' }
    ],
    referenceNotes: [],
    studentNotes: [
      {
        year: '2023', files: [
          { name: 'Handwritten Notes', file: 'files/sem1/cs-404/student-notes/2023/DM-Handwritten-Notes-2023.pdf' }
        ]
      }
    ],
    practiceQuestions: [
      {
        year: '2025', files: [
          { name: 'Practice Questions', file: 'files/sem1/cs-404/practice-questions/2025/DM-practice-questions-2025.pdf' }
        ]
      }
    ],
    assignments: [
      {
        year: '2025', teacher: 'Prof. Sonajharia Minz', files: [
          { name: 'Assignment', file: 'files/sem1/cs-404/assignments/2025/DM-assignment-2025.pdf' }
        ]
      }
    ],
    books: [
      { title: 'Discrete Mathematical Structures', author: 'Kolman, Busby & Ross — 6th Ed.', file: 'files/sem1/cs-404/books/Discrete Mathematical Structures- Kolman, Busby and Ross Edition 6.pdf' },
      { title: 'Discrete Mathematical Structures', author: 'Kolman, Busby & Ross — 3rd Ed.', file: 'files/sem1/cs-404/books/Discrete Mathematical Structures- Kolman, Busby and Ross Edition 3.pdf' },
      { title: 'Discrete Mathematical Structures', author: 'Tremblay & Manohar', file: 'files/sem1/cs-404/books/Discrete Mathematical Structures, Tremblay and Manohar.pdf' },
      { title: 'Discrete Mathematics and its Applications', author: 'Rosen', file: 'files/sem1/cs-404/books/Discrete Mathematics and its Applications, Rosen.pdf' },
      { title: 'Elements of Discrete Structures', author: 'Liu', file: 'files/sem1/cs-404/books/Elements of Discrete Structures, Liu.pdf' }
    ]
  },

  'cs-405': {
    code: 'CS-405', name: 'Computer Architecture', credits: 4, type: 'core', sem: 1, status: 'verified',
    syllabus: "Data representation and arithmetic, register transfer and micro-operations, instruction codes and addressing modes, CPU organization, pipelining and vector processing, I/O organization (DMA, interrupts, I/O processors), and memory organization (RAM, ROM, cache, associative memory).",    topics: ['Data representation & arithmetic', 'Register transfer & micro-operations', 'Instruction codes & addressing modes', 'CPU organization', 'Pipelining & vector processing', 'I/O organization (DMA, interrupts, I/O processors)', 'Memory organization (RAM, ROM, cache, associative memory)'],
    teachers: [
      { name: 'Dr. Asutosh Srivastava', rank: 'Assistant Professor', years: '2022–2026', current: true }
    ],
    notes: [
      "Reference material here is a mix: an NPTEL PDF plus a full 12-week NPTEL slide set, alongside separate 2023 handwritten student notes.",
      "No assignments or projects are given in this subject."
    ],
    pyq: [
      { year: '2025', file: 'files/sem1/cs-405/pyq/CA-2025.pdf' },
      { year: '2024', file: 'files/sem1/cs-405/pyq/CA-2024.pdf' },
      { year: '2023', file: 'files/sem1/cs-405/pyq/CA-2023.pdf' },
      { year: '2022', file: 'files/sem1/cs-405/pyq/CA-2022.pdf' }
    ],
    referenceNotes: [
      {
        label: 'NPTEL', teacher: 'External — NPTEL', files: [
          { name: 'Computer Architecture and Organisation (NPTEL)', file: 'files/sem1/cs-405/reference-notes/CAO NPTEL.pdf' },
          { name: 'Week 1 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week1-slides.pdf' },
          { name: 'Week 2 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week2-slides.pdf' },
          { name: 'Week 3 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week3-slides.pdf' },
          { name: 'Week 4 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week4-slides.pdf' },
          { name: 'Week 5 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week5-slides.pdf' },
          { name: 'Week 6 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week6-slides.pdf' },
          { name: 'Week 7 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week7-slides.pdf' },
          { name: 'Week 8 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week8-slides.pdf' },
          { name: 'Week 9 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week9-slides.pdf' },
          { name: 'Week 10 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week10-slides.pdf' },
          { name: 'Week 11 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week11-slides.pdf' },
          { name: 'Week 12 Slides', file: 'files/sem1/cs-405/reference-notes/NPTEL-Slides/week12-slides.pdf' }
        ]
      }
    ],
    studentNotes: [
      {
        year: '2023', files: [
          { name: 'Handwritten Notes', file: 'files/sem1/cs-405/student-notes/2023/CA-Handwritten-Notes-2023.pdf' }
        ]
      }
    ],
    assignments: [],
    books: [
      { title: 'Computer Organization and Architecture', author: 'William Stallings', file: 'files/sem1/cs-405/books/Computer Organization and Architecture, William Stallings.pdf' },
      { title: 'Computer Organization and Design', author: 'Patterson, Hennessy, Kaufmann', file: 'files/sem1/cs-405/books/Computer Organization and Design, Patterson,Hennessy,Kaufmann.pdf' },
      { title: 'Computer System Architecture', author: 'Morris Mano', file: 'files/sem1/cs-405/books/Computer System Architecture, Morris Mano.pdf' },
      { title: 'Solutions Manual', author: 'Morris Mano', file: 'files/sem1/cs-405/books/Solutions Manual, Mano.pdf' }
    ]
  },

  'cs-406': {
    code: 'CS-406', name: 'Numerical Methods', credits: 4, type: 'core', sem: 1, status: 'verified',
    syllabus: "Fixed and floating-point representation, error propagation, root finding (Newton's method, fixed-point iteration), interpolation, spline functions, Chebyshev approximation, numerical integration and differentiation, solving systems of linear equations, and ordinary differential equations (Euler, Runge-Kutta, multi-step methods).",    topics: ['Fixed & floating-point representation', 'Error propagation', 'Root finding (Newton\'s method, fixed-point iteration)', 'Interpolation & spline functions', 'Chebyshev approximation', 'Numerical integration & differentiation', 'Solving systems of linear equations', 'Ordinary differential equations (Euler, Runge-Kutta, multi-step methods)'],
    teachers: [
      { name: 'Dr. Anuj Sachan', rank: 'Assistant Professor', years: '2026', current: true },
      { name: 'Dr. Ayesha Chaudhary', rank: 'Assistant Professor', years: '2023–2025' }
    ],
    notes: [
      "No reference notes on file yet — handwritten student notes from 2023 are the closest thing besides PYQs.",
      "2026 PYQ not up yet since that year's exam hasn't happened."
    ],
    pyq: [
      { year: '2025', file: 'files/sem1/cs-406/pyq/NM-2025.pdf' },
      { year: '2024', file: 'files/sem1/cs-406/pyq/NM-2024.pdf' },
      { year: '2023', file: 'files/sem1/cs-406/pyq/NM-2023.pdf' }
    ],
    referenceNotes: [],
    studentNotes: [
      {
        year: '2023', files: [
          { name: 'Handwritten Notes', file: 'files/sem1/cs-406/student-notes/2023/NM-Handwritten-Notes-2023.pdf' }
        ]
      }
    ],
    assignments: [
      {
        year: '2025', teacher: 'Dr. Ayesha Chaudhary', files: [
          { name: 'Assignment', file: 'files/sem1/cs-406/assignments/2025/NM-assignment-2025.pdf' }
        ]
      },
      {
        year: '2023', teacher: 'Dr. Ayesha Chaudhary', files: [
          { name: 'Assignment', file: 'files/sem1/cs-406/assignments/2023/NM-assignment-2023.pdf' }
        ]
      }
    ],
    books: [
      { title: 'Numerical Methods', author: 'Jain, Iyengar & Jain', file: 'files/sem1/cs-406/books/Numerical Methods, Jain,Iyengar and Jain.pdf' },
      { title: 'Numerical Methods for Engineers', author: 'Chopra & Canale', file: 'files/sem1/cs-406/books/Numerical Methods for Engineers,Chopra and Canale.pdf' },
      { title: 'Numerical Analysis', author: 'Cheney & Kincaid', file: 'files/sem1/cs-406/books/Numerical Analysis, Cheney and Kincaid.pdf' },
      { title: 'Introductory Methods of Numerical Analysis', author: 'Sastry', file: 'files/sem1/cs-406/books/Introductory Methods of Numerical Analysis, Sastry.pdf' }
    ]
  }

};
