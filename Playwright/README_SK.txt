Practice Test Automation – Testovanie prihlasovacej stránky


Tento projekt nadväzuje na moje portfólio Manuálneho testovania a demonštruje prechod od manuálneho vykonávania testov k automatizovanému UI testovaniu pomocou Playwright a TypeScriptu. 
Každý automatizovaný test zodpovedá existujúcemu manuálnemu testovaciemu prípadu a používa rovnaké označenie Test Case ID, čím je zabezpečená sledovateľnosť medzi manuálnym a automatizovaným testovaním.


Testovacie prostredie
Operačný systém: Windows 11
Programovací jazyk: TypeScript
Framework pre automatizované testovanie: Playwright
Vývojové prostredie (IDE): Visual Studio Code

Obsah projektu:
- Page Object Model (POM)
- Automatizované testovanie prihlasovania
- Pozitívne a negatívne testovacie scenáre
- Prepojenie medzi manuálnymi a automatizovanými testovacími prípadmi

Pokrytie testov:
- Úspešné prihlásenie
- Neplatné používateľské meno
- Neplatné heslo
- Prázdne používateľské meno
- Prázdne heslo
- Prázdne používateľské meno aj heslo
- Hraničné a validačné scenáre

Sledovateľnosť testov:

Každý test Playwright používa rovnaké Test Case ID ako aj manuálny testovací prípad.

Príklad:
TC_LP_001 → Overenie úspešného prihlásenia
TC_LP_002 → Overenie prihlásenia s neplatným používateľským menom
TC_LP_003 → Overenie prihlásenia s neplatným heslom