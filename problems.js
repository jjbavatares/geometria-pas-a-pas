window.GEOMETRIA_PROBLEMS = [
  {
    "q": "Dues fotografies rectangulars tenen costats de 3 cm i 4 cm, i de 6 cm i 8 cm, respectivament. Són figures semblants? Compara els costats homòlegs i justifica la resposta.",
    "data": [
      "Primer rectangle: 3 i 4 cm.",
      "Segon rectangle: 6 i 8 cm.",
      "Els angles són de 90°."
    ],
    "formula": [
      "Raó = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "6",
          "3"
        ],
        " = 2"
      ],
      [
        [
          "frac",
          "8",
          "4"
        ],
        " = 2"
      ],
      "Les dues proporcions són iguals."
    ],
    "answer": "Sí, són semblants: angles iguals i costats homòlegs proporcionals.",
    "check": [
      "rectangles",
      3,
      4,
      6,
      8,
      true
    ],
    "number": 1
  },
  {
    "q": "Dues pantalles rectangulars tenen costats de 3 cm i 4 cm, i de 6 cm i 10 cm, respectivament. Són figures semblants? Compara els costats homòlegs i justifica la resposta.",
    "data": [
      "Primer rectangle: 3 i 4 cm.",
      "Segon rectangle: 6 i 10 cm.",
      "Els angles són de 90°."
    ],
    "formula": [
      "Raó = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "6",
          "3"
        ],
        " = 2"
      ],
      [
        [
          "frac",
          "10",
          "4"
        ],
        " = 2,5"
      ],
      "Les dues proporcions són diferents."
    ],
    "answer": "No són semblants: els costats homòlegs no tenen la mateixa proporció.",
    "check": [
      "rectangles",
      3,
      4,
      6,
      10,
      false
    ],
    "number": 2
  },
  {
    "q": "Dues rajoles quadrades tenen costats de 4 cm i 10 cm. Són semblants? Explica per què.",
    "data": [
      "Costats: 4 cm i 10 cm.",
      "Són dos quadrats."
    ],
    "formula": [
      "Raó = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó = ",
        [
          "frac",
          "10",
          "4"
        ],
        " = 2,5"
      ],
      "Tots els angles són de 90°.",
      "Tots els costats homòlegs tenen aquesta proporció."
    ],
    "answer": "Sí, són semblants perquè tenen els angles iguals i els costats homòlegs proporcionals.",
    "check": [
      "square",
      4,
      10
    ],
    "number": 3
  },
  {
    "q": "Dues rodes circulars tenen radis de 3 cm i 6 cm. Són figures semblants? Quina és la raó de longitud del primer cercle al segon?",
    "data": [
      "Radi inicial: 3 cm.",
      "Radi final: 6 cm.",
      "Tenen forma circular."
    ],
    "formula": [
      "Raó = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó = ",
        [
          "frac",
          "6",
          "3"
        ],
        " = 2"
      ],
      "Un cercle s’obté ampliant o reduint l’altre."
    ],
    "answer": "Sí, són semblants. La raó de longitud és 2.",
    "check": [
      "circle",
      3,
      6
    ],
    "number": 4
  },
  {
    "q": "Dues capses tenen forma de cub. Les arestes fan 2 cm i 6 cm. Són cossos semblants? Quina és la raó de longitud del primer al segon?",
    "data": [
      "Aresta inicial: 2 cm.",
      "Aresta final: 6 cm.",
      "Són dos cubs."
    ],
    "formula": [
      "Raó = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó = ",
        [
          "frac",
          "6",
          "2"
        ],
        " = 3"
      ],
      "Totes les arestes s’amplien en la mateixa proporció."
    ],
    "answer": "Sí, són cossos semblants. La raó de longitud és 3.",
    "check": [
      "cube",
      2,
      6
    ],
    "number": 5
  },
  {
    "q": "Tres rectes paral·leles tallen dues rectes secants. En una secant, dos segments consecutius fan a = 2 cm i a′ = 4 cm. Els segments homòlegs de l’altra secant fan b = 3 cm i b′ = x. Calcula x.",
    "data": [
      "a = 2 cm.",
      "b = 3 cm.",
      "a′ = 4 cm.",
      "b′ = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "2",
          "3"
        ],
        " = ",
        [
          "frac",
          "4",
          "x"
        ]
      ],
      [
        "2 · x = 4 · 3"
      ],
      [
        "x = ",
        [
          "frac",
          "4 · 3",
          "2"
        ],
        " = 6 cm"
      ]
    ],
    "answer": "El segment x mesura 6 cm.",
    "check": [
      "tales",
      "2",
      "3",
      "4",
      "6"
    ],
    "number": 6
  },
  {
    "q": "Tres rectes paral·leles tallen dues rectes secants. En una secant, dos segments consecutius fan a = 3 cm i a′ = 5 cm. Els segments homòlegs de l’altra secant fan b = 6 cm i b′ = x. Calcula x.",
    "data": [
      "a = 3 cm.",
      "b = 6 cm.",
      "a′ = 5 cm.",
      "b′ = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "3",
          "6"
        ],
        " = ",
        [
          "frac",
          "5",
          "x"
        ]
      ],
      [
        "3 · x = 5 · 6"
      ],
      [
        "x = ",
        [
          "frac",
          "5 · 6",
          "3"
        ],
        " = 10 cm"
      ]
    ],
    "answer": "El segment x mesura 10 cm.",
    "check": [
      "tales",
      "3",
      "6",
      "5",
      "10"
    ],
    "number": 7
  },
  {
    "q": "Tres rectes paral·leles tallen dues rectes secants. En una secant, dos segments consecutius fan a = 4 cm i a′ = 8 cm. Els segments homòlegs de l’altra secant fan b = 6 cm i b′ = x. Calcula x.",
    "data": [
      "a = 4 cm.",
      "b = 6 cm.",
      "a′ = 8 cm.",
      "b′ = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "4",
          "6"
        ],
        " = ",
        [
          "frac",
          "8",
          "x"
        ]
      ],
      [
        "4 · x = 8 · 6"
      ],
      [
        "x = ",
        [
          "frac",
          "8 · 6",
          "4"
        ],
        " = 12 cm"
      ]
    ],
    "answer": "El segment x mesura 12 cm.",
    "check": [
      "tales",
      "4",
      "6",
      "8",
      "12"
    ],
    "number": 8
  },
  {
    "q": "Tres carrers paral·lels tallen dues avingudes rectes en un plànol. En una secant, dos segments consecutius fan a = 5 cm i a′ = 3 cm. Els segments homòlegs de l’altra secant fan b = 10 cm i b′ = x. Calcula x.",
    "data": [
      "a = 5 cm.",
      "b = 10 cm.",
      "a′ = 3 cm.",
      "b′ = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "5",
          "10"
        ],
        " = ",
        [
          "frac",
          "3",
          "x"
        ]
      ],
      [
        "5 · x = 3 · 10"
      ],
      [
        "x = ",
        [
          "frac",
          "3 · 10",
          "5"
        ],
        " = 6 cm"
      ]
    ],
    "answer": "El segment x mesura 6 cm.",
    "check": [
      "tales",
      "5",
      "10",
      "3",
      "6"
    ],
    "number": 9
  },
  {
    "q": "Tres rectes paral·leles tallen dues rectes secants. En una secant, dos segments consecutius fan a = 6 cm i a′ = 4 cm. Els segments homòlegs de l’altra secant fan b = 9 cm i b′ = x. Calcula x.",
    "data": [
      "a = 6 cm.",
      "b = 9 cm.",
      "a′ = 4 cm.",
      "b′ = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "6",
          "9"
        ],
        " = ",
        [
          "frac",
          "4",
          "x"
        ]
      ],
      [
        "6 · x = 4 · 9"
      ],
      [
        "x = ",
        [
          "frac",
          "4 · 9",
          "6"
        ],
        " = 6 cm"
      ]
    ],
    "answer": "El segment x mesura 6 cm.",
    "check": [
      "tales",
      "6",
      "9",
      "4",
      "6"
    ],
    "number": 10
  },
  {
    "q": "Un triangle té angles de 40° i 60°. Un altre té angles de 40° i 60°. Són semblants? Calcula els angles que falten i justifica la resposta.",
    "data": [
      "Primer: 40° i 60°.",
      "Segon: 40° i 60°.",
      "Suma dels angles: 180°."
    ],
    "formula": [
      "Criteri AA: A = A′; B = B′"
    ],
    "steps": [
      "Angle que falta al primer: 180° - 40° - 60° = 80°.",
      "Angle que falta al segon: 180° - 40° - 60° = 80°.",
      "Comparem els tres angles dels dos triangles."
    ],
    "answer": "Sí, són semblants pel criteri AA. Els angles que falten són 80° i 80°.",
    "check": [
      "aa",
      40,
      60,
      40,
      60,
      true
    ],
    "number": 11
  },
  {
    "q": "Els costats d’un triangle fan 3, 4 i 5 cm. Els d’un altre fan 6, 8 i 10 cm, en el mateix ordre de costats homòlegs. Són semblants?",
    "data": [
      "Costats inicials: (3, 4, 5) cm.",
      "Costats finals: (6, 8, 10) cm."
    ],
    "formula": [
      [
        "frac",
        "a",
        "a′"
      ],
      " = ",
      [
        "frac",
        "b",
        "b′"
      ],
      " = ",
      [
        "frac",
        "c",
        "c′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "3",
          "6"
        ],
        " = 0,5"
      ],
      [
        [
          "frac",
          "4",
          "8"
        ],
        " = 0,5"
      ],
      [
        [
          "frac",
          "5",
          "10"
        ],
        " = 0,5"
      ],
      "Comparem els tres quocients."
    ],
    "answer": "Sí, són semblants pel criteri CCC.",
    "check": [
      "ccc",
      [
        3,
        4,
        5
      ],
      [
        6,
        8,
        10
      ],
      true
    ],
    "number": 12
  },
  {
    "q": "Un triangle té costats b = 3 cm i c = 4 cm amb un angle de 60° entre ells. Un altre té costats homòlegs b′ = 6 cm i c′ = 8 cm amb un angle de 60° entre ells. Són semblants?",
    "data": [
      "b = 3 cm; c = 4 cm.",
      "b′ = 6 cm; c′ = 8 cm.",
      "Angles inclosos: 60° i 60°."
    ],
    "formula": [
      "Angle A = angle A′; ",
      [
        "frac",
        "b",
        "b′"
      ],
      " = ",
      [
        "frac",
        "c",
        "c′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "3",
          "6"
        ],
        " = 0,5"
      ],
      [
        [
          "frac",
          "4",
          "8"
        ],
        " = 0,5"
      ],
      "Comparem els angles inclosos: 60° i 60°."
    ],
    "answer": "Sí, són semblants pel criteri CAC.",
    "check": [
      "cac",
      3,
      4,
      6,
      8,
      60,
      60,
      true
    ],
    "number": 13
  },
  {
    "q": "Dos triangles són semblants. Dos costats homòlegs fan 4 cm i 8 cm. Un altre costat del triangle petit fa 5 cm. Quant fa el costat homòleg del gran?",
    "data": [
      "a = 4 cm.",
      "a′ = 8 cm.",
      "b = 5 cm.",
      "b′ = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "a′"
      ],
      " = ",
      [
        "frac",
        "b",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "4",
          "8"
        ],
        " = ",
        [
          "frac",
          "5",
          "x"
        ]
      ],
      [
        "4 · x = 8 · 5"
      ],
      [
        "x = ",
        [
          "frac",
          "8 · 5",
          "4"
        ],
        " = 10 cm"
      ]
    ],
    "answer": "El costat homòleg del triangle gran mesura 10 cm.",
    "check": [
      "length",
      "4",
      "8",
      "5",
      "10"
    ],
    "number": 14
  },
  {
    "q": "Una persona de 1,5 m projecta una ombra de 1 m. A la mateixa hora i sobre un terra horitzontal, un arbre projecta una ombra de 4 m. Calcula’n l’altura utilitzant triangles semblants.",
    "data": [
      "Altura persona: 1,5 m.",
      "Ombra persona: 1 m.",
      "Ombra objecte: 4 m."
    ],
    "formula": [
      [
        "frac",
        "altura arbre",
        "ombra arbre"
      ],
      " = ",
      [
        "frac",
        "altura persona",
        "ombra persona"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "h",
          "4"
        ],
        " = ",
        [
          "frac",
          "1,5",
          "1"
        ]
      ],
      [
        "h = ",
        [
          "frac",
          "4 · 1,5",
          "1"
        ],
        " = 6 m"
      ]
    ],
    "answer": "L’altura és de 6 m.",
    "check": [
      "shadow",
      "1.5",
      "1",
      "4",
      "6"
    ],
    "number": 15
  },
  {
    "q": "Una recta paral·lela a la base forma un triangle petit dins d’un de gran. La base petita fa 2 cm, la base gran fa 6 cm i el costat inclinat petit fa 4 cm. Calcula el costat inclinat gran.",
    "data": [
      "Base petita: 2 cm.",
      "Base gran: 6 cm.",
      "Costat petit: 4 cm.",
      "Costat gran = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "4",
          "2"
        ],
        " = ",
        [
          "frac",
          "x",
          "6"
        ]
      ],
      [
        "x = ",
        [
          "frac",
          "4 · 6",
          "2"
        ],
        " = 12 cm"
      ]
    ],
    "answer": "El costat inclinat del triangle gran mesura 12 cm.",
    "check": [
      "nested",
      "2",
      "6",
      "4",
      "12"
    ],
    "number": 16
  },
  {
    "q": "Una recta paral·lela a la base forma un triangle petit dins d’un de gran. La base petita fa 3 cm, la base gran fa 6 cm i el costat inclinat petit fa 5 cm. Calcula el costat inclinat gran.",
    "data": [
      "Base petita: 3 cm.",
      "Base gran: 6 cm.",
      "Costat petit: 5 cm.",
      "Costat gran = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "5",
          "3"
        ],
        " = ",
        [
          "frac",
          "x",
          "6"
        ]
      ],
      [
        "x = ",
        [
          "frac",
          "5 · 6",
          "3"
        ],
        " = 10 cm"
      ]
    ],
    "answer": "El costat inclinat del triangle gran mesura 10 cm.",
    "check": [
      "nested",
      "3",
      "6",
      "5",
      "10"
    ],
    "number": 17
  },
  {
    "q": "Una recta paral·lela a la base forma un triangle petit dins d’un de gran. La base petita fa 4 cm, la base gran fa 10 cm i el costat inclinat petit fa 6 cm. Calcula el costat inclinat gran.",
    "data": [
      "Base petita: 4 cm.",
      "Base gran: 10 cm.",
      "Costat petit: 6 cm.",
      "Costat gran = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "6",
          "4"
        ],
        " = ",
        [
          "frac",
          "x",
          "10"
        ]
      ],
      [
        "x = ",
        [
          "frac",
          "6 · 10",
          "4"
        ],
        " = 15 cm"
      ]
    ],
    "answer": "El costat inclinat del triangle gran mesura 15 cm.",
    "check": [
      "nested",
      "4",
      "10",
      "6",
      "15"
    ],
    "number": 18
  },
  {
    "q": "Una línia de reforç paral·lela a la base divideix un rètol triangular. La base petita fa 5 cm, la base gran fa 15 cm i el costat inclinat petit fa 8 cm. Calcula el costat inclinat gran.",
    "data": [
      "Base petita: 5 cm.",
      "Base gran: 15 cm.",
      "Costat petit: 8 cm.",
      "Costat gran = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "8",
          "5"
        ],
        " = ",
        [
          "frac",
          "x",
          "15"
        ]
      ],
      [
        "x = ",
        [
          "frac",
          "8 · 15",
          "5"
        ],
        " = 24 cm"
      ]
    ],
    "answer": "El costat inclinat del triangle gran mesura 24 cm.",
    "check": [
      "nested",
      "5",
      "15",
      "8",
      "24"
    ],
    "number": 19
  },
  {
    "q": "Una recta paral·lela a la base forma un triangle petit dins d’un de gran. La base petita fa 6 cm, la base gran fa 9 cm i el costat inclinat petit fa 8 cm. Calcula el costat inclinat gran.",
    "data": [
      "Base petita: 6 cm.",
      "Base gran: 9 cm.",
      "Costat petit: 8 cm.",
      "Costat gran = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "8",
          "6"
        ],
        " = ",
        [
          "frac",
          "x",
          "9"
        ]
      ],
      [
        "x = ",
        [
          "frac",
          "8 · 9",
          "6"
        ],
        " = 12 cm"
      ]
    ],
    "answer": "El costat inclinat del triangle gran mesura 12 cm.",
    "check": [
      "nested",
      "6",
      "9",
      "8",
      "12"
    ],
    "number": 20
  },
  {
    "q": "Un triangle rectangle té una hipotenusa de 10 cm. La projecció del catet b sobre la hipotenusa fa 3,6 cm. Quant mesura el catet b?",
    "data": [
      "Hipotenusa a = 10 cm.",
      "Projecció m = 3,6 cm.",
      "Busquem b."
    ],
    "formula": [
      "b² = a · m"
    ],
    "steps": [
      [
        "b² = 10 · 3,6 = 36"
      ],
      [
        "b = ",
        [
          "root",
          "36",
          2
        ],
        " = 6 cm"
      ]
    ],
    "answer": "El catet b mesura 6 cm.",
    "check": [
      "catet",
      "10",
      "3.6",
      "6"
    ],
    "number": 21
  },
  {
    "q": "Un triangle rectangle té una hipotenusa de 25 cm. La projecció del catet b sobre la hipotenusa fa 9 cm. Quant mesura el catet b?",
    "data": [
      "Hipotenusa a = 25 cm.",
      "Projecció m = 9 cm.",
      "Busquem b."
    ],
    "formula": [
      "b² = a · m"
    ],
    "steps": [
      [
        "b² = 25 · 9 = 225"
      ],
      [
        "b = ",
        [
          "root",
          "225",
          2
        ],
        " = 15 cm"
      ]
    ],
    "answer": "El catet b mesura 15 cm.",
    "check": [
      "catet",
      "25",
      "9",
      "15"
    ],
    "number": 22
  },
  {
    "q": "Un triangle rectangle té una hipotenusa de 20 cm. La projecció del catet b sobre la hipotenusa fa 5 cm. Quant mesura el catet b?",
    "data": [
      "Hipotenusa a = 20 cm.",
      "Projecció m = 5 cm.",
      "Busquem b."
    ],
    "formula": [
      "b² = a · m"
    ],
    "steps": [
      [
        "b² = 20 · 5 = 100"
      ],
      [
        "b = ",
        [
          "root",
          "100",
          2
        ],
        " = 10 cm"
      ]
    ],
    "answer": "El catet b mesura 10 cm.",
    "check": [
      "catet",
      "20",
      "5",
      "10"
    ],
    "number": 23
  },
  {
    "q": "Un triangle rectangle té una hipotenusa de 16 cm. La projecció del catet b sobre la hipotenusa fa 9 cm. Quant mesura el catet b?",
    "data": [
      "Hipotenusa a = 16 cm.",
      "Projecció m = 9 cm.",
      "Busquem b."
    ],
    "formula": [
      "b² = a · m"
    ],
    "steps": [
      [
        "b² = 16 · 9 = 144"
      ],
      [
        "b = ",
        [
          "root",
          "144",
          2
        ],
        " = 12 cm"
      ]
    ],
    "answer": "El catet b mesura 12 cm.",
    "check": [
      "catet",
      "16",
      "9",
      "12"
    ],
    "number": 24
  },
  {
    "q": "Un triangle rectangle té una hipotenusa de 18 cm. La projecció del catet b sobre la hipotenusa fa 8 cm. Quant mesura el catet b?",
    "data": [
      "Hipotenusa a = 18 cm.",
      "Projecció m = 8 cm.",
      "Busquem b."
    ],
    "formula": [
      "b² = a · m"
    ],
    "steps": [
      [
        "b² = 18 · 8 = 144"
      ],
      [
        "b = ",
        [
          "root",
          "144",
          2
        ],
        " = 12 cm"
      ]
    ],
    "answer": "El catet b mesura 12 cm.",
    "check": [
      "catet",
      "18",
      "8",
      "12"
    ],
    "number": 25
  },
  {
    "q": "Un triangle rectangle té l’altura traçada sobre la hipotenusa. Aquesta queda dividida en dos segments de 4 cm i 9 cm. Calcula l’altura.",
    "data": [
      "m = 4 cm.",
      "n = 9 cm.",
      "Busquem h."
    ],
    "formula": [
      "h² = m · n"
    ],
    "steps": [
      [
        "h² = 4 · 9 = 36"
      ],
      [
        "h = ",
        [
          "root",
          "36",
          2
        ],
        " = 6 cm"
      ]
    ],
    "answer": "L’altura sobre la hipotenusa mesura 6 cm.",
    "check": [
      "height",
      "4",
      "9",
      "6"
    ],
    "number": 26
  },
  {
    "q": "Un triangle rectangle té l’altura traçada sobre la hipotenusa. Aquesta queda dividida en dos segments de 9 cm i 16 cm. Calcula l’altura.",
    "data": [
      "m = 9 cm.",
      "n = 16 cm.",
      "Busquem h."
    ],
    "formula": [
      "h² = m · n"
    ],
    "steps": [
      [
        "h² = 9 · 16 = 144"
      ],
      [
        "h = ",
        [
          "root",
          "144",
          2
        ],
        " = 12 cm"
      ]
    ],
    "answer": "L’altura sobre la hipotenusa mesura 12 cm.",
    "check": [
      "height",
      "9",
      "16",
      "12"
    ],
    "number": 27
  },
  {
    "q": "Un triangle rectangle té l’altura traçada sobre la hipotenusa. Aquesta queda dividida en dos segments de 1 cm i 9 cm. Calcula l’altura.",
    "data": [
      "m = 1 cm.",
      "n = 9 cm.",
      "Busquem h."
    ],
    "formula": [
      "h² = m · n"
    ],
    "steps": [
      [
        "h² = 1 · 9 = 9"
      ],
      [
        "h = ",
        [
          "root",
          "9",
          2
        ],
        " = 3 cm"
      ]
    ],
    "answer": "L’altura sobre la hipotenusa mesura 3 cm.",
    "check": [
      "height",
      "1",
      "9",
      "3"
    ],
    "number": 28
  },
  {
    "q": "Un triangle rectangle té l’altura traçada sobre la hipotenusa. Aquesta queda dividida en dos segments de 4 cm i 16 cm. Calcula l’altura.",
    "data": [
      "m = 4 cm.",
      "n = 16 cm.",
      "Busquem h."
    ],
    "formula": [
      "h² = m · n"
    ],
    "steps": [
      [
        "h² = 4 · 16 = 64"
      ],
      [
        "h = ",
        [
          "root",
          "64",
          2
        ],
        " = 8 cm"
      ]
    ],
    "answer": "L’altura sobre la hipotenusa mesura 8 cm.",
    "check": [
      "height",
      "4",
      "16",
      "8"
    ],
    "number": 29
  },
  {
    "q": "Un triangle rectangle té l’altura traçada sobre la hipotenusa. Aquesta queda dividida en dos segments de 2 cm i 8 cm. Calcula l’altura.",
    "data": [
      "m = 2 cm.",
      "n = 8 cm.",
      "Busquem h."
    ],
    "formula": [
      "h² = m · n"
    ],
    "steps": [
      [
        "h² = 2 · 8 = 16"
      ],
      [
        "h = ",
        [
          "root",
          "16",
          2
        ],
        " = 4 cm"
      ]
    ],
    "answer": "L’altura sobre la hipotenusa mesura 4 cm.",
    "check": [
      "height",
      "2",
      "8",
      "4"
    ],
    "number": 30
  },
  {
    "q": "Un triangle rectangle té catets de 3 cm i 4 cm. Calcula la hipotenusa.",
    "data": [
      "Catet b = 3 cm.",
      "Catet c = 4 cm.",
      "Busquem a."
    ],
    "formula": [
      "a² = b² + c²"
    ],
    "steps": [
      [
        "a² = 3² + 4²"
      ],
      [
        "a² = 9 + 16 = 25"
      ],
      [
        "a = ",
        [
          "root",
          "25",
          2
        ],
        " = 5 cm"
      ]
    ],
    "answer": "La hipotenusa mesura 5 cm.",
    "check": [
      "pyth",
      "3",
      "4",
      "5"
    ],
    "number": 31
  },
  {
    "q": "Un rectangle té una base de 6 cm i una altura de 8 cm. Calcula la diagonal a, que és la hipotenusa del triangle que es forma.",
    "data": [
      "Catet b = 6 cm.",
      "Catet c = 8 cm.",
      "Busquem a."
    ],
    "formula": [
      "a² = b² + c²"
    ],
    "steps": [
      [
        "a² = 6² + 8²"
      ],
      [
        "a² = 36 + 64 = 100"
      ],
      [
        "a = ",
        [
          "root",
          "100",
          2
        ],
        " = 10 cm"
      ]
    ],
    "answer": "La diagonal del rectangle mesura 10 cm.",
    "check": [
      "pyth",
      "6",
      "8",
      "10"
    ],
    "number": 32
  },
  {
    "q": "Un triangle rectangle té una hipotenusa de 13 cm i un catet c de 5 cm. Calcula l’altre catet b.",
    "data": [
      "a = 13 cm.",
      "c = 5 cm.",
      "Busquem b."
    ],
    "formula": [
      "b² = a² - c²"
    ],
    "steps": [
      [
        "b² = 13² - 5²"
      ],
      [
        "b² = 169 - 25 = 144"
      ],
      [
        "b = ",
        [
          "root",
          "144",
          2
        ],
        " = 12 cm"
      ]
    ],
    "answer": "L’altre catet mesura 12 cm.",
    "check": [
      "missing",
      "13",
      "5",
      "12"
    ],
    "number": 33
  },
  {
    "q": "Un triangle rectangle té catets de 5 cm i 12 cm. Calcula la hipotenusa.",
    "data": [
      "Catet b = 5 cm.",
      "Catet c = 12 cm.",
      "Busquem a."
    ],
    "formula": [
      "a² = b² + c²"
    ],
    "steps": [
      [
        "a² = 5² + 12²"
      ],
      [
        "a² = 25 + 144 = 169"
      ],
      [
        "a = ",
        [
          "root",
          "169",
          2
        ],
        " = 13 cm"
      ]
    ],
    "answer": "La hipotenusa mesura 13 cm.",
    "check": [
      "pyth",
      "5",
      "12",
      "13"
    ],
    "number": 34
  },
  {
    "q": "El triangle format per una escala de mà, una paret vertical i un terra horitzontal té una hipotenusa de 5 m i un catet c de 3 m. Calcula l’altre catet b.",
    "data": [
      "a = 5 m.",
      "c = 3 m.",
      "Busquem b."
    ],
    "formula": [
      "b² = a² - c²"
    ],
    "steps": [
      [
        "b² = 5² - 3²"
      ],
      [
        "b² = 25 - 9 = 16"
      ],
      [
        "b = ",
        [
          "root",
          "16",
          2
        ],
        " = 4 m"
      ]
    ],
    "answer": "L’altre catet mesura 4 m.",
    "check": [
      "missing",
      "5",
      "3",
      "4"
    ],
    "number": 35
  },
  {
    "q": "Un costat d’una figura passa de 2 cm a 6 cm. La figura final és semblant a la inicial. Un altre costat inicial fa 4 cm. Calcula Raó<sub>Long</sub> i la longitud final del segon costat.",
    "data": [
      "longitud inicial = 2 cm.",
      "longitud final = 6 cm.",
      "Segon costat inicial: 4 cm."
    ],
    "formula": [
      "Raó<sub>Long</sub> = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó<sub>Long</sub> = ",
        [
          "frac",
          "6 cm",
          "2 cm"
        ],
        " = 3"
      ],
      [
        "longitud final = longitud inicial · Raó<sub>Long</sub>"
      ],
      [
        "longitud final = 4 · 3 = 12 cm"
      ]
    ],
    "answer": "Raó<sub>Long</sub> = 3. El segon costat final mesura 12 cm.",
    "check": [
      "length",
      "2",
      "6",
      "4",
      "12"
    ],
    "number": 36
  },
  {
    "q": "Un costat d’una fotografia rectangular passa de 8 cm a 4 cm. La figura final és semblant a la inicial. Un altre costat inicial fa 6 cm. Calcula Raó<sub>Long</sub> i la longitud final del segon costat.",
    "data": [
      "longitud inicial = 8 cm.",
      "longitud final = 4 cm.",
      "Segon costat inicial: 6 cm."
    ],
    "formula": [
      "Raó<sub>Long</sub> = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó<sub>Long</sub> = ",
        [
          "frac",
          "4 cm",
          "8 cm"
        ],
        " = 0,5"
      ],
      [
        "longitud final = longitud inicial · Raó<sub>Long</sub>"
      ],
      [
        "longitud final = 6 · 0,5 = 3 cm"
      ]
    ],
    "answer": "Raó<sub>Long</sub> = 0,5. El segon costat final mesura 3 cm.",
    "check": [
      "length",
      "8",
      "4",
      "6",
      "3"
    ],
    "number": 37
  },
  {
    "q": "Un costat d’una maqueta passa de 3 cm a 12 cm. La figura final és semblant a la inicial. Un altre costat inicial fa 5 cm. Calcula Raó<sub>Long</sub> i la longitud final del segon costat.",
    "data": [
      "longitud inicial = 3 cm.",
      "longitud final = 12 cm.",
      "Segon costat inicial: 5 cm."
    ],
    "formula": [
      "Raó<sub>Long</sub> = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó<sub>Long</sub> = ",
        [
          "frac",
          "12 cm",
          "3 cm"
        ],
        " = 4"
      ],
      [
        "longitud final = longitud inicial · Raó<sub>Long</sub>"
      ],
      [
        "longitud final = 5 · 4 = 20 cm"
      ]
    ],
    "answer": "Raó<sub>Long</sub> = 4. El segon costat final mesura 20 cm.",
    "check": [
      "length",
      "3",
      "12",
      "5",
      "20"
    ],
    "number": 38
  },
  {
    "q": "Un costat d’una peça passa de 5 cm a 15 cm. La figura final és semblant a la inicial. Un altre costat inicial fa 7 cm. Calcula Raó<sub>Long</sub> i la longitud final del segon costat.",
    "data": [
      "longitud inicial = 5 cm.",
      "longitud final = 15 cm.",
      "Segon costat inicial: 7 cm."
    ],
    "formula": [
      "Raó<sub>Long</sub> = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó<sub>Long</sub> = ",
        [
          "frac",
          "15 cm",
          "5 cm"
        ],
        " = 3"
      ],
      [
        "longitud final = longitud inicial · Raó<sub>Long</sub>"
      ],
      [
        "longitud final = 7 · 3 = 21 cm"
      ]
    ],
    "answer": "Raó<sub>Long</sub> = 3. El segon costat final mesura 21 cm.",
    "check": [
      "length",
      "5",
      "15",
      "7",
      "21"
    ],
    "number": 39
  },
  {
    "q": "Un costat d’una imatge passa de 10 cm a 2 cm. La figura final és semblant a la inicial. Un altre costat inicial fa 15 cm. Calcula Raó<sub>Long</sub> i la longitud final del segon costat.",
    "data": [
      "longitud inicial = 10 cm.",
      "longitud final = 2 cm.",
      "Segon costat inicial: 15 cm."
    ],
    "formula": [
      "Raó<sub>Long</sub> = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó<sub>Long</sub> = ",
        [
          "frac",
          "2 cm",
          "10 cm"
        ],
        " = 0,2"
      ],
      [
        "longitud final = longitud inicial · Raó<sub>Long</sub>"
      ],
      [
        "longitud final = 15 · 0,2 = 3 cm"
      ]
    ],
    "answer": "Raó<sub>Long</sub> = 0,2. El segon costat final mesura 3 cm.",
    "check": [
      "length",
      "10",
      "2",
      "15",
      "3"
    ],
    "number": 40
  },
  {
    "q": "Una figura té una àrea inicial de 5 cm². S’amplia amb Raó<sub>Àrea</sub> = 2. Calcula l’àrea final.",
    "data": [
      "àrea inicial = 5 cm².",
      "Raó<sub>Àrea</sub> = 2."
    ],
    "formula": [
      "àrea final = àrea inicial · (Raó<sub>Àrea</sub>)²"
    ],
    "steps": [
      [
        "àrea final = 5 · 2²"
      ],
      [
        "àrea final = 5 · 4 = 20 cm²"
      ]
    ],
    "answer": "L’àrea final és de 20 cm².",
    "check": [
      "area",
      "5",
      "2",
      "20"
    ],
    "number": 41
  },
  {
    "q": "Una rajola té una àrea inicial de 3 cm². S’amplia amb Raó<sub>Àrea</sub> = 3. Calcula l’àrea final.",
    "data": [
      "àrea inicial = 3 cm².",
      "Raó<sub>Àrea</sub> = 3."
    ],
    "formula": [
      "àrea final = àrea inicial · (Raó<sub>Àrea</sub>)²"
    ],
    "steps": [
      [
        "àrea final = 3 · 3²"
      ],
      [
        "àrea final = 3 · 9 = 27 cm²"
      ]
    ],
    "answer": "L’àrea final és de 27 cm².",
    "check": [
      "area",
      "3",
      "3",
      "27"
    ],
    "number": 42
  },
  {
    "q": "Una fotografia té una àrea inicial de 20 cm². Es redueix amb Raó<sub>Àrea</sub> = 0,5. Calcula l’àrea final.",
    "data": [
      "àrea inicial = 20 cm².",
      "Raó<sub>Àrea</sub> = 0,5."
    ],
    "formula": [
      "àrea final = àrea inicial · (Raó<sub>Àrea</sub>)²"
    ],
    "steps": [
      [
        "àrea final = 20 · 0,5²"
      ],
      [
        "àrea final = 20 · 0,25 = 5 cm²"
      ]
    ],
    "answer": "L’àrea final és de 5 cm².",
    "check": [
      "area",
      "20",
      "0.5",
      "5"
    ],
    "number": 43
  },
  {
    "q": "Dues figures semblants tenen una àrea inicial de 4 cm² i una àrea final de 36 cm². Calcula Raó<sub>Àrea</sub>.",
    "data": [
      "àrea inicial = 4 cm².",
      "àrea final = 36 cm²."
    ],
    "formula": [
      "Raó<sub>Àrea</sub> = ",
      [
        "root",
        [
          "frac",
          "àrea final",
          "àrea inicial"
        ],
        2
      ]
    ],
    "steps": [
      [
        "Raó<sub>Àrea</sub> = ",
        [
          "root",
          [
            "frac",
            "36 cm²",
            "4 cm²"
          ],
          2
        ]
      ],
      [
        "Raó<sub>Àrea</sub> = ",
        [
          "root",
          "9",
          2
        ],
        " = 3"
      ]
    ],
    "answer": "Raó<sub>Àrea</sub> és 3; les longituds es multipliquen per 3.",
    "check": [
      "rootratio",
      "4",
      "36",
      "2",
      "3"
    ],
    "number": 44
  },
  {
    "q": "Una zona rectangular d’un jardí té una àrea inicial de 8 m². S’amplia amb Raó<sub>Àrea</sub> = 2. Calcula l’àrea final.",
    "data": [
      "àrea inicial = 8 m².",
      "Raó<sub>Àrea</sub> = 2."
    ],
    "formula": [
      "àrea final = àrea inicial · (Raó<sub>Àrea</sub>)²"
    ],
    "steps": [
      [
        "àrea final = 8 · 2²"
      ],
      [
        "àrea final = 8 · 4 = 32 m²"
      ]
    ],
    "answer": "L’àrea final és de 32 m².",
    "check": [
      "area",
      "8",
      "2",
      "32"
    ],
    "number": 45
  },
  {
    "q": "Un cos té un volum inicial de 4 cm³. S’amplia amb Raó<sub>Volum</sub> = 2. Calcula el volum final.",
    "data": [
      "volum inicial = 4 cm³.",
      "Raó<sub>Volum</sub> = 2."
    ],
    "formula": [
      "volum final = volum inicial · (Raó<sub>Volum</sub>)³"
    ],
    "steps": [
      [
        "volum final = 4 · 2³"
      ],
      [
        "volum final = 4 · 8 = 32 cm³"
      ]
    ],
    "answer": "El volum final és de 32 cm³.",
    "check": [
      "volume",
      "4",
      "2",
      "32"
    ],
    "number": 46
  },
  {
    "q": "Una capsa té un volum inicial de 2 cm³. S’amplia amb Raó<sub>Volum</sub> = 3. Calcula el volum final.",
    "data": [
      "volum inicial = 2 cm³.",
      "Raó<sub>Volum</sub> = 3."
    ],
    "formula": [
      "volum final = volum inicial · (Raó<sub>Volum</sub>)³"
    ],
    "steps": [
      [
        "volum final = 2 · 3³"
      ],
      [
        "volum final = 2 · 27 = 54 cm³"
      ]
    ],
    "answer": "El volum final és de 54 cm³.",
    "check": [
      "volume",
      "2",
      "3",
      "54"
    ],
    "number": 47
  },
  {
    "q": "Una peça té un volum inicial de 64 cm³. Es redueix amb Raó<sub>Volum</sub> = 0,5. Calcula el volum final.",
    "data": [
      "volum inicial = 64 cm³.",
      "Raó<sub>Volum</sub> = 0,5."
    ],
    "formula": [
      "volum final = volum inicial · (Raó<sub>Volum</sub>)³"
    ],
    "steps": [
      [
        "volum final = 64 · 0,5³"
      ],
      [
        "volum final = 64 · 0,125 = 8 cm³"
      ]
    ],
    "answer": "El volum final és de 8 cm³.",
    "check": [
      "volume",
      "64",
      "0.5",
      "8"
    ],
    "number": 48
  },
  {
    "q": "Dos cossos semblants tenen un volum inicial de 3 cm³ i un volum final de 24 cm³. Calcula Raó<sub>Volum</sub>.",
    "data": [
      "volum inicial = 3 cm³.",
      "volum final = 24 cm³."
    ],
    "formula": [
      "Raó<sub>Volum</sub> = ",
      [
        "root",
        [
          "frac",
          "volum final",
          "volum inicial"
        ],
        3
      ]
    ],
    "steps": [
      [
        "Raó<sub>Volum</sub> = ",
        [
          "root",
          [
            "frac",
            "24 cm³",
            "3 cm³"
          ],
          3
        ]
      ],
      [
        "Raó<sub>Volum</sub> = ",
        [
          "root",
          "8",
          3
        ],
        " = 2"
      ]
    ],
    "answer": "Raó<sub>Volum</sub> és 2; les longituds es multipliquen per 2.",
    "check": [
      "rootratio",
      "3",
      "24",
      "3",
      "2"
    ],
    "number": 49
  },
  {
    "q": "Un dipòsit té un volum inicial de 5 m³. S’amplia amb Raó<sub>Volum</sub> = 2. Calcula el volum final.",
    "data": [
      "volum inicial = 5 m³.",
      "Raó<sub>Volum</sub> = 2."
    ],
    "formula": [
      "volum final = volum inicial · (Raó<sub>Volum</sub>)³"
    ],
    "steps": [
      [
        "volum final = 5 · 2³"
      ],
      [
        "volum final = 5 · 8 = 40 m³"
      ]
    ],
    "answer": "El volum final és de 40 m³.",
    "check": [
      "volume",
      "5",
      "2",
      "40"
    ],
    "number": 50
  },
  {
    "q": "Un rectangle té una base de 9 m i una altura de 12 m. Calcula la diagonal a, que és la hipotenusa del triangle que es forma.",
    "data": [
      "Catet b = 9 m.",
      "Catet c = 12 m.",
      "Busquem a."
    ],
    "formula": [
      "a² = b² + c²"
    ],
    "steps": [
      [
        "a² = 9² + 12²"
      ],
      [
        "a² = 81 + 144 = 225"
      ],
      [
        "a = ",
        [
          "root",
          "225",
          2
        ],
        " = 15 m"
      ]
    ],
    "answer": "La diagonal del rectangle mesura 15 m.",
    "check": [
      "pyth",
      "9",
      "12",
      "15"
    ],
    "number": 51
  },
  {
    "q": "Dues targetes rectangulars tenen costats de 2 cm i 5 cm, i de 4 cm i 10 cm, respectivament. Són figures semblants? Compara els costats homòlegs i justifica la resposta.",
    "data": [
      "Primer rectangle: 2 i 5 cm.",
      "Segon rectangle: 4 i 10 cm.",
      "Els angles són de 90°."
    ],
    "formula": [
      "Raó = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "4",
          "2"
        ],
        " = 2"
      ],
      [
        [
          "frac",
          "10",
          "5"
        ],
        " = 2"
      ],
      "Les dues proporcions són iguals."
    ],
    "answer": "Sí, són semblants: angles iguals i costats homòlegs proporcionals.",
    "check": [
      "rectangles",
      2,
      5,
      4,
      10,
      true
    ],
    "number": 52
  },
  {
    "q": "Un cos té un volum inicial de 3 cm³. S’amplia amb Raó<sub>Volum</sub> = 3. Calcula el volum final.",
    "data": [
      "volum inicial = 3 cm³.",
      "Raó<sub>Volum</sub> = 3."
    ],
    "formula": [
      "volum final = volum inicial · (Raó<sub>Volum</sub>)³"
    ],
    "steps": [
      [
        "volum final = 3 · 3³"
      ],
      [
        "volum final = 3 · 27 = 81 cm³"
      ]
    ],
    "answer": "El volum final és de 81 cm³.",
    "check": [
      "volume",
      "3",
      "3",
      "81"
    ],
    "number": 53
  },
  {
    "q": "Tres rectes paral·leles tallen dues rectes secants. En una secant, dos segments consecutius fan a = 3 cm i a′ = 6 cm. Els segments homòlegs de l’altra secant fan b = 4 cm i b′ = x. Calcula x.",
    "data": [
      "a = 3 cm.",
      "b = 4 cm.",
      "a′ = 6 cm.",
      "b′ = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "3",
          "4"
        ],
        " = ",
        [
          "frac",
          "6",
          "x"
        ]
      ],
      [
        "3 · x = 6 · 4"
      ],
      [
        "x = ",
        [
          "frac",
          "6 · 4",
          "3"
        ],
        " = 8 cm"
      ]
    ],
    "answer": "El segment x mesura 8 cm.",
    "check": [
      "tales",
      "3",
      "4",
      "6",
      "8"
    ],
    "number": 54
  },
  {
    "q": "Una figura té una àrea inicial de 6 cm². S’amplia amb Raó<sub>Àrea</sub> = 2. Calcula l’àrea final.",
    "data": [
      "àrea inicial = 6 cm².",
      "Raó<sub>Àrea</sub> = 2."
    ],
    "formula": [
      "àrea final = àrea inicial · (Raó<sub>Àrea</sub>)²"
    ],
    "steps": [
      [
        "àrea final = 6 · 2²"
      ],
      [
        "àrea final = 6 · 4 = 24 cm²"
      ]
    ],
    "answer": "L’àrea final és de 24 cm².",
    "check": [
      "area",
      "6",
      "2",
      "24"
    ],
    "number": 55
  },
  {
    "q": "Un triangle rectangle té l’altura traçada sobre la hipotenusa. Aquesta queda dividida en dos segments de 9 cm i 25 cm. Calcula l’altura.",
    "data": [
      "m = 9 cm.",
      "n = 25 cm.",
      "Busquem h."
    ],
    "formula": [
      "h² = m · n"
    ],
    "steps": [
      [
        "h² = 9 · 25 = 225"
      ],
      [
        "h = ",
        [
          "root",
          "225",
          2
        ],
        " = 15 cm"
      ]
    ],
    "answer": "L’altura sobre la hipotenusa mesura 15 cm.",
    "check": [
      "height",
      "9",
      "25",
      "15"
    ],
    "number": 56
  },
  {
    "q": "Dos triangles són semblants. Dos costats homòlegs fan 3 cm i 9 cm. Un altre costat del triangle petit fa 4 cm. Quant fa el costat homòleg del gran?",
    "data": [
      "a = 3 cm.",
      "a′ = 9 cm.",
      "b = 4 cm.",
      "b′ = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "a′"
      ],
      " = ",
      [
        "frac",
        "b",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "3",
          "9"
        ],
        " = ",
        [
          "frac",
          "4",
          "x"
        ]
      ],
      [
        "3 · x = 9 · 4"
      ],
      [
        "x = ",
        [
          "frac",
          "9 · 4",
          "3"
        ],
        " = 12 cm"
      ]
    ],
    "answer": "El costat homòleg del triangle gran mesura 12 cm.",
    "check": [
      "length",
      "3",
      "9",
      "4",
      "12"
    ],
    "number": 57
  },
  {
    "q": "Un costat d’una fotografia passa de 6 cm a 3 cm. La figura final és semblant a la inicial. Un altre costat inicial fa 10 cm. Calcula Raó<sub>Long</sub> i la longitud final del segon costat.",
    "data": [
      "longitud inicial = 6 cm.",
      "longitud final = 3 cm.",
      "Segon costat inicial: 10 cm."
    ],
    "formula": [
      "Raó<sub>Long</sub> = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó<sub>Long</sub> = ",
        [
          "frac",
          "3 cm",
          "6 cm"
        ],
        " = 0,5"
      ],
      [
        "longitud final = longitud inicial · Raó<sub>Long</sub>"
      ],
      [
        "longitud final = 10 · 0,5 = 5 cm"
      ]
    ],
    "answer": "Raó<sub>Long</sub> = 0,5. El segon costat final mesura 5 cm.",
    "check": [
      "length",
      "6",
      "3",
      "10",
      "5"
    ],
    "number": 58
  },
  {
    "q": "Un triangle rectangle té una hipotenusa de 25 cm. La projecció del catet b sobre la hipotenusa fa 16 cm. Quant mesura el catet b?",
    "data": [
      "Hipotenusa a = 25 cm.",
      "Projecció m = 16 cm.",
      "Busquem b."
    ],
    "formula": [
      "b² = a · m"
    ],
    "steps": [
      [
        "b² = 25 · 16 = 400"
      ],
      [
        "b = ",
        [
          "root",
          "400",
          2
        ],
        " = 20 cm"
      ]
    ],
    "answer": "El catet b mesura 20 cm.",
    "check": [
      "catet",
      "25",
      "16",
      "20"
    ],
    "number": 59
  },
  {
    "q": "Una recta paral·lela a la base forma un triangle petit dins d’un de gran. La base petita fa 3 cm, la base gran fa 12 cm i el costat inclinat petit fa 5 cm. Calcula el costat inclinat gran.",
    "data": [
      "Base petita: 3 cm.",
      "Base gran: 12 cm.",
      "Costat petit: 5 cm.",
      "Costat gran = x."
    ],
    "formula": [
      [
        "frac",
        "a",
        "b"
      ],
      " = ",
      [
        "frac",
        "a′",
        "b′"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "5",
          "3"
        ],
        " = ",
        [
          "frac",
          "x",
          "12"
        ]
      ],
      [
        "x = ",
        [
          "frac",
          "5 · 12",
          "3"
        ],
        " = 20 cm"
      ]
    ],
    "answer": "El costat inclinat del triangle gran mesura 20 cm.",
    "check": [
      "nested",
      "3",
      "12",
      "5",
      "20"
    ],
    "number": 60
  },
  {
    "q": "Un triangle té angles de 30° i 70°. Un altre té angles de 30° i 60°. Són semblants? Calcula els angles que falten i justifica la resposta.",
    "data": [
      "Primer: 30° i 70°.",
      "Segon: 30° i 60°.",
      "Suma dels angles: 180°."
    ],
    "formula": [
      "Criteri AA: A = A′; B = B′"
    ],
    "steps": [
      "Angle que falta al primer: 180° - 30° - 70° = 80°.",
      "Angle que falta al segon: 180° - 30° - 60° = 90°.",
      "Comparem els tres angles dels dos triangles."
    ],
    "answer": "No són semblants: els angles no coincideixen. Els angles que falten són 80° i 90°.",
    "check": [
      "aa",
      30,
      70,
      30,
      60,
      false
    ],
    "number": 61
  },
  {
    "q": "En el plànol d’una habitació a escala 1:100, una longitud del dibuix fa 3 cm. Quina longitud representa a la realitat, en metres?",
    "data": [
      "Escala 1:100.",
      "longitud dibuix = 3 cm.",
      "Busquem la longitud real."
    ],
    "formula": [
      "Escala = ",
      [
        "frac",
        "longitud dibuix",
        "longitud real"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "1",
          "100"
        ],
        " = ",
        [
          "frac",
          "3 cm",
          "longitud real"
        ]
      ],
      [
        "longitud real = 3 · 100 = 300 cm"
      ],
      [
        "300 cm · ",
        [
          "frac",
          "1 m",
          "100 cm"
        ],
        " = 3 m"
      ]
    ],
    "answer": "La longitud real és de 3 m.",
    "check": [
      "scale",
      "3",
      "100",
      "3",
      "m"
    ],
    "number": 62
  },
  {
    "q": "Dues figures semblants tenen una àrea inicial de 2 cm² i una àrea final de 18 cm². Calcula Raó<sub>Àrea</sub>.",
    "data": [
      "àrea inicial = 2 cm².",
      "àrea final = 18 cm²."
    ],
    "formula": [
      "Raó<sub>Àrea</sub> = ",
      [
        "root",
        [
          "frac",
          "àrea final",
          "àrea inicial"
        ],
        2
      ]
    ],
    "steps": [
      [
        "Raó<sub>Àrea</sub> = ",
        [
          "root",
          [
            "frac",
            "18 cm²",
            "2 cm²"
          ],
          2
        ]
      ],
      [
        "Raó<sub>Àrea</sub> = ",
        [
          "root",
          "9",
          2
        ],
        " = 3"
      ]
    ],
    "answer": "Raó<sub>Àrea</sub> és 3; les longituds es multipliquen per 3.",
    "check": [
      "rootratio",
      "2",
      "18",
      "2",
      "3"
    ],
    "number": 63
  },
  {
    "q": "Un triangle rectangle té una hipotenusa de 10 cm i un catet c de 6 cm. Calcula l’altre catet b.",
    "data": [
      "a = 10 cm.",
      "c = 6 cm.",
      "Busquem b."
    ],
    "formula": [
      "b² = a² - c²"
    ],
    "steps": [
      [
        "b² = 10² - 6²"
      ],
      [
        "b² = 100 - 36 = 64"
      ],
      [
        "b = ",
        [
          "root",
          "64",
          2
        ],
        " = 8 cm"
      ]
    ],
    "answer": "L’altre catet mesura 8 cm.",
    "check": [
      "missing",
      "10",
      "6",
      "8"
    ],
    "number": 64
  },
  {
    "q": "Dues capses tenen forma de cub. Les arestes fan 3 cm i 9 cm. Són cossos semblants? Quina és la raó de longitud del primer al segon?",
    "data": [
      "Aresta inicial: 3 cm.",
      "Aresta final: 9 cm.",
      "Són dos cubs."
    ],
    "formula": [
      "Raó = ",
      [
        "frac",
        "longitud final",
        "longitud inicial"
      ]
    ],
    "steps": [
      [
        "Raó = ",
        [
          "frac",
          "9",
          "3"
        ],
        " = 3"
      ],
      "Totes les arestes s’amplien en la mateixa proporció."
    ],
    "answer": "Sí, són cossos semblants. La raó de longitud és 3.",
    "check": [
      "cube",
      3,
      9
    ],
    "number": 65
  },
  {
    "q": "Un triangle rectangle té l’altura traçada sobre la hipotenusa. Aquesta queda dividida en dos segments de 4 cm i 25 cm. Calcula l’altura.",
    "data": [
      "m = 4 cm.",
      "n = 25 cm.",
      "Busquem h."
    ],
    "formula": [
      "h² = m · n"
    ],
    "steps": [
      [
        "h² = 4 · 25 = 100"
      ],
      [
        "h = ",
        [
          "root",
          "100",
          2
        ],
        " = 10 cm"
      ]
    ],
    "answer": "L’altura sobre la hipotenusa mesura 10 cm.",
    "check": [
      "height",
      "4",
      "25",
      "10"
    ],
    "number": 66
  },
  {
    "q": "Dos cossos semblants tenen un volum inicial de 2 cm³ i un volum final de 54 cm³. Calcula Raó<sub>Volum</sub>.",
    "data": [
      "volum inicial = 2 cm³.",
      "volum final = 54 cm³."
    ],
    "formula": [
      "Raó<sub>Volum</sub> = ",
      [
        "root",
        [
          "frac",
          "volum final",
          "volum inicial"
        ],
        3
      ]
    ],
    "steps": [
      [
        "Raó<sub>Volum</sub> = ",
        [
          "root",
          [
            "frac",
            "54 cm³",
            "2 cm³"
          ],
          3
        ]
      ],
      [
        "Raó<sub>Volum</sub> = ",
        [
          "root",
          "27",
          3
        ],
        " = 3"
      ]
    ],
    "answer": "Raó<sub>Volum</sub> és 3; les longituds es multipliquen per 3.",
    "check": [
      "rootratio",
      "2",
      "54",
      "3",
      "3"
    ],
    "number": 67
  },
  {
    "q": "Una persona de 1,5 m projecta una ombra de 2 m. A la mateixa hora i sobre un terra horitzontal, un arbre projecta una ombra de 8 m. Calcula’n l’altura utilitzant triangles semblants.",
    "data": [
      "Altura persona: 1,5 m.",
      "Ombra persona: 2 m.",
      "Ombra objecte: 8 m."
    ],
    "formula": [
      [
        "frac",
        "altura arbre",
        "ombra arbre"
      ],
      " = ",
      [
        "frac",
        "altura persona",
        "ombra persona"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "h",
          "8"
        ],
        " = ",
        [
          "frac",
          "1,5",
          "2"
        ]
      ],
      [
        "h = ",
        [
          "frac",
          "8 · 1,5",
          "2"
        ],
        " = 6 m"
      ]
    ],
    "answer": "L’altura és de 6 m.",
    "check": [
      "shadow",
      "1.5",
      "2",
      "8",
      "6"
    ],
    "number": 68
  },
  {
    "q": "Un triangle rectangle té una hipotenusa de 10 cm. La projecció del catet b sobre la hipotenusa fa 6,4 cm. Quant mesura el catet b?",
    "data": [
      "Hipotenusa a = 10 cm.",
      "Projecció m = 6,4 cm.",
      "Busquem b."
    ],
    "formula": [
      "b² = a · m"
    ],
    "steps": [
      [
        "b² = 10 · 6,4 = 64"
      ],
      [
        "b = ",
        [
          "root",
          "64",
          2
        ],
        " = 8 cm"
      ]
    ],
    "answer": "El catet b mesura 8 cm.",
    "check": [
      "catet",
      "10",
      "6.4",
      "8"
    ],
    "number": 69
  },
  {
    "q": "En un mapa de camins a escala 1:50000, una longitud del dibuix fa 2 cm. Quina longitud representa a la realitat, en quilòmetres?",
    "data": [
      "Escala 1:50000.",
      "longitud dibuix = 2 cm.",
      "Busquem la longitud real."
    ],
    "formula": [
      "Escala = ",
      [
        "frac",
        "longitud dibuix",
        "longitud real"
      ]
    ],
    "steps": [
      [
        [
          "frac",
          "1",
          "50000"
        ],
        " = ",
        [
          "frac",
          "2 cm",
          "longitud real"
        ]
      ],
      [
        "longitud real = 2 · 50000 = 100000 cm"
      ],
      [
        "100000 cm · ",
        [
          "frac",
          "1 km",
          "100 000 cm"
        ],
        " = 1 km"
      ]
    ],
    "answer": "La longitud real és de 1 km.",
    "check": [
      "scale",
      "2",
      "50000",
      "1",
      "km"
    ],
    "number": 70
  }
];
