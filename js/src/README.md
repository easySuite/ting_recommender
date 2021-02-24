# BibSpire
**Not opensource yet!**

## UI

Config page:

- Drawer/settings
- Demo

Drawer:

- Sites:
- Bibliotek
- Filtre
    - Kun materialer med forsider
    - (Kun materialer der er hjemme)
    - (Kun materialer med kort kø)
- Anbefalingskomponent:
    - Anbefalingssteder
        - Materialevisning
        - (Efter bestilling)
        - (Ved søgning)
        - (Ved lånerstatus)
    - Visningstype: Rækker med materialer
    - Antal rækker: 
- Tjek at materialer er i en en af følgende:
    - Fysisk beholdning
    - (eReolen)
    - (Andre kilder...)
- Prioritering
    - Populære - snævre
- Anbefalingsdata
    - WebTrekk
    - ADHL
    - (MetaData)
    - (DBCs anbefaler)

## notes
https://platform.dandigbib.org/projects/ddb-cms/wiki/DDBCMSstatus

Roadmap

v1.0.0

- √simpel proof-of-concept konfigurerbar recommender
- √simpel proof-of-concept komponent på manifestvisning i DDB-CMS
- √recommender baserer sig på webstatistik
- √recommender filtrerer på bibliotekets bestand
- komponent: samme design som eksisterende anbefalinger i DDB-CMS
    - heading: Inspiration font-size 40px, line-height 44px
    - cover: 158x221px
    - text: title \n **creator**
    - font-size: 14px line-height: 20px 
    - 6 poster uden scroll til at starte med
- drifts-server setup (forøjeblikket kører recommender-prototypen på udviklingsserver uden SLA)
- recommender: filtrer så det kun er materialer med forsider
- recommender: kombinerer webstatistik med ADHL-data
- recommender: værkorienteret i stedet for manifest-orienteret
- DDB-CMS modul i stedet for blot at tilføje webkomponenten med Add-To-Head modulet.

Fremtidige mulige udvidelser:

- Brugsstatistik så effekten af anbefalingerne kan måles
- navigation med flere anbefalinger
- Administrativ grænseflade, hvor preferencer om anbefalinger og komponent kan tilpasses af de enkelte biblioteker
- Anbefalinger i bestil-flow'et efter bestilling
- Anbefalinger ved lånerstatus
- Filtrering på om materialet er hjemme
- Alternative anbefalingsvisninger
- Personalisering, - tilpas anbefalinger ud fra den nuværende bruger
- Endnu bedre anbefalinger ved også at inddrage metadata, mere data science og genrerum
- Eksempel på hvorledes komponenten kan indlejres i andre løsninger app/infoskærm/udlånsautomat (komponenten er lavet så den let kan indlejres andre steder end DDB-CMS).
