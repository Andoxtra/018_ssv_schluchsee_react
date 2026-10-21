# External content review — 2026-09-15

The guest-registration, opening-hours and statutes PDFs were downloaded from the
existing club website, checked as PDF files (1, 1 and 7 pages respectively), and
migrated to `public/documents/`. Their contents still need the club's editorial
approval. Future document updates should replace these bundled files and rebuild.

| Document | Original source | Local copy |
| --- | --- | --- |
| Guest registration | [Club PDF](https://www.ssv-schluchsee.de/images/uploads/Anmeldung%20f%C3%BCr%20Gastsch%C3%BCtzen%2004.04.26.pdf) | [gastanmeldung.pdf](../public/documents/gastanmeldung.pdf) |
| Opening hours | [Club PDF](https://www.ssv-schluchsee.de/images/uploads/%C3%96ffnungszeiten.pdf) | [oeffnungszeiten.pdf](../public/documents/oeffnungszeiten.pdf) |
| Statutes | [Club download](https://www.ssv-schluchsee.de/index.php/downloads?task=weblink.go&id=27) | [satzung.pdf](../public/documents/satzung.pdf) |

The former Bavarian association URL `bsb-ev.de` returned a building-consumer
organization, not a shooting association. Several other copied association URLs
could not be verified. The public Links page now directs users to the
[DSB's official regional-association directory](https://www.dsb.de/der-verband/ueber-uns/mitglieder/landesverbaende),
the [DSB](https://www.dsb.de/), and [SBSV](https://www.sbsv.de/).

The guessed DSB sports-rule URL returned 404. Its replacement was located in the
DSB sitemap and checked: [national sports rules](https://www.dsb.de/der-verband/ueber-uns/statuten/sportordnung-national).

The three historical Sportschützenkreis 3 result destinations responded with
HTTP 200 and the expected organization title. Their historical content remains
an archive; availability does not establish completeness or current relevance.

The OpenStreetMap destination, embedded map and privacy-policy page responded
successfully. The map is now loaded only after the visitor chooses to load it.

Official legal destinations checked successfully: [WaffG](https://www.gesetze-im-internet.de/waffg_2002/),
[§ 7](https://www.gesetze-im-internet.de/waffg_2002/__7.html),
[§ 14](https://www.gesetze-im-internet.de/waffg_2002/__14.html),
[§ 27](https://www.gesetze-im-internet.de/waffg_2002/__27.html), and
[§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html).
The copied legal summaries were replaced with links to these sources. Final legal
and privacy review, approved contact details, and register information remain open.
