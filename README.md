# Geometria pas a pas

Web educativa en català per aprendre geometria amb explicacions breus, dibuixos, exemples i problemes resolts. El fil conductor és **L’illa de la geometria**, amb la Guspira com a guia.

## Contingut

- Inici.
- Triangles semblants: semblança, criteris AA/CCC/CAC, Tales i posició de Tales.
- Teoremes: catet, altura i Pitàgores.
- Raó de semblança: longitud, àrea i volum. Les escales són una aplicació dins de la raó de longitud, amb teoria i exemples resolts.
- Problemes de tot tipus: 70 problemes, distribuïts en deu grups de cinc i vint problemes barrejats. Cada problema inclou dades, resolució i solució.

L’Inici inclou **L’illa de les proporcions**, un Escape Room de cinc proves que s’obre en una finestra nova. El navegador pot mostrar-lo en una pestanya.

## Escape Room

El banc `escape-data.js` conté 30 situacions: sis de comparació, sis d’ampliació, sis de reducció, sis de mesura desconeguda i sis de detecció de deformacions. Cada partida tria una prova de cada grup, barreja l’ordre i les opcions, i evita les cinc preguntes de la partida anterior si l’emmagatzematge local està disponible.

Cada prova té cinc opcions, una única resposta correcta i dues ajudes sense penalització. Les dues ajudes comencen desactivades. El primer error activa Ajuda 1; cal llegir-la abans de tornar a respondre. Si es falla després d’aquesta ajuda, s’activa Ajuda 2, que també cal llegir. Si el tercer intent és incorrecte, es mostra la solució explicada. Una resposta incorrecta ja provada es desactiva. Cada prova compta una sola vegada: encert si es resol en qualsevol dels tres intents; error si es fallen tots tres. Amb quatre o cinc encerts es mostra la victòria; amb zero, un, dos o tres, es proposa tornar a practicar. No hi ha rellotge ni recollida de dades personals.

L’Escape Room utilitza una pantalla per pas, amb el botó d’inici gran sota la il·lustració. En finestres petites, els botons «Observa» i «Respon» separen el dibuix de les cinc opcions per mantenir la lletra llegible sense desplaçament. Les ajudes apareixen en finestres del joc. Les explicacions s’avancen un pas cada vegada i la revisió final mostra una prova cada vegada. La guia d’inici continua disponible amb «Com juguem?» en la presentació compacta.

L’inici del joc explica que llapis i paper poden ajudar i que la calculadora és opcional. Les melodies suaus originals es generen amb Web Audio (`escape-audio.js`): prova aconseguida, prova fallida, victòria i derrota. El botó de so permet silenciar-les i conserva aquesta preferència al navegador. No inclou veu.

Els escenaris `assets/escape-*.png` s’han generat amb l’eina d’imatges: illa completa, platja, bosc, jardí, pont i far; estil de còmic científic per a adolescents, contorns blau marí, turquesa, verd i groc, sense text ni personatges afegits. El joc alterna cinc il·lustracions de la Guspira amb diferents postures i enquadraments: cos sencer, mig cos i pit en amunt. Cada partida mostra les cinc variants, una per prova; la imatge es manté mentre l’alumne consulta les ajudes. Els fitxers i les instruccions de generació són a [assets/guspira-variants.md](assets/guspira-variants.md). Els dibuixos de les mesures són SVG calculats a la mateixa escala dins de cada prova.

## Fórmules i nomenclatura

S’utilitza la nomenclatura dels apunts: `a` és la hipotenusa, `b` i `c` els catets, `m` la projecció de `b`, `n` la projecció de `c` i `h` l’altura sobre la hipotenusa.

En aquest material, **Raó_Àrea** i **Raó_Volum** designen el **factor de longitud obtingut a partir d’àrees o volums**. Per tant, el seu quadrat i el seu cub són els factors que multipliquen l’àrea i el volum, respectivament. Les llegendes expliquen aquesta convenció dels apunts.

## Presentació

Les operacions de divisió utilitzen `:` i les de multiplicació, `·`. Les fórmules de la teoria conserven les fraccions dels apunts. En l’Escape Room, cal arribar a l’últim pas de l’explicació abans de passar a la prova següent o al resultat final. Els quatre sons tenen un volum reforçat. «Torna a l’inici» tanca la finestra oberta pel joc; si el navegador impedeix el tancament, mostra l’inici en aquella pestanya.

Estil de còmic científic, amb una mateixa Guspira a totes les pantalles, idees importants en verd i negreta, fórmules amb fraccions i arrels, i resolucions desplegables.

La teoria de semblança inclou un exemple de triangles 3–4–5 i 6–8–10 amb costats i angles homòlegs marcats per colors, i una comparació a la mateixa escala entre un rectangle 4 × 2, una ampliació 8 × 4 i una deformació 8 × 6.

La lletra principal és **Segoe Print**, com als apunts, quan està instal·lada al dispositiu. Si no hi és, el navegador utilitza una alternativa disponible. No es distribueixen fitxers de fonts de Microsoft amb el projecte.

## Publicació

Web estàtica compatible amb GitHub Pages. La publicació utilitza la branca `main` i la carpeta arrel. No necessita servidor d’aplicació, contrasenyes ni claus d’accés.

Per revisar-la localment, serveix aquesta carpeta amb un servidor HTTP i obre `index.html`. Els fitxers de contingut són `content.js` i `problems.js`; els dibuixos dels problemes són a `diagrams.js`.

La il·lustració de la Guspira s’ha generat amb una eina d’imatges. Els esquemes matemàtics són dibuixos SVG del projecte.
