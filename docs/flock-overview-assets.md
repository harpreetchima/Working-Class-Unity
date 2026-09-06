# Flock overview image provenance

Reviewed September 5, 2026. The camera illustration was supplied by Harpreet Chima, who states that he created it and requests no credit. Delivery variants preserve its composition; only mechanical resizing and WebP encoding were applied. The seven portraits are 400 × 400 WebP delivery variants, mechanically resized from the City's 2400 × 2400 JPEGs at quality 82. Portrait originals were decoded and visually inspected; identity mapping comes from the City's labeled HTML links, not facial recognition. No image is evidence that the depicted camera is installed in Stockton.

Release decision, September 5: Harpreet supplied his replacement image and authorized commit, pull request, merge, and Coolify deployment. The earlier Commons camera photograph has been removed from the release assets. No visible camera credit or caption is included, as requested.

## Camera illustration

The user-provided PNG is 1572 × 1001 pixels and 2,209,588 bytes. Its SHA-256 is `fe7a41f0fce2f2316ee11f5cb5d0743604b510d0e514c3fdb203b0d6cc54d3e1`. The original is retained outside the repository. These quality-82 WebP variants are delivered through responsive `srcset`/`sizes`; the intrinsic aspect ratio is declared to reserve layout space, and the hero image has high fetch priority.

| Local filename                | Dimensions  |   Bytes |
| ----------------------------- | ----------- | ------: |
| camera-illustration-480.webp  | 480 × 306   |  26,290 |
| camera-illustration-768.webp  | 768 × 489   |  49,064 |
| camera-illustration-1280.webp | 1280 × 815  |  95,606 |
| camera-illustration-1572.webp | 1572 × 1001 | 127,736 |

Historical preview source, no longer shipped: [Julian Focareta / Flock Safety camera photograph on Commons](https://commons.wikimedia.org/wiki/File:Flock_Safety_Camera_and_Solar_Panel.jpg), licensed CC BY-SA 4.0. Its attribution requirement is not applicable to Harpreet's separate replacement illustration.

## Council portraits

[Official Stockton council directory](https://www.stocktonca.gov/government/city_council/index.php) explicitly pairs each downloaded photograph with its linked official page and name/district: Fugazi (mayor), Lee (vice mayor/District 6), Padilla (District 1), Ponce (District 2), Blower (District 3), Enríquez (District 4), and Villapudua (District 5). All seven local files correspond to those exact image URLs. The individual page paths use `mayor.php` and `district_1.php` through `district_6.php` in the same directory.

All paths below are inside `public/images/flock-overview/`.

| Local filename         | Source                                                                                                             | Delivered dimensions |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------- |
| christina-fugazi.webp  | [City original](https://www.stocktonca.gov/Images/Government/City%20Council/Approver_Christina_Fugazi_HD.jpg)      | 400 × 400            |
| jason-lee.webp         | [City original](https://www.stocktonca.gov/Images/Government/City%20Council/Approver_Jason_Lee_HD.jpg)             | 400 × 400            |
| michele-padilla.webp   | [City original](https://www.stocktonca.gov/Images/Government/City%20Council/Approver_Padilla_HD.jpg)               | 400 × 400            |
| mariela-ponce.webp     | [City original](https://www.stocktonca.gov/Images/Government/City%20Council/Approver_Ponce_Mariela_HD.jpg)         | 400 × 400            |
| michael-blower.webp    | [City original](https://www.stocktonca.gov/Images/Government/City%20Council/Approver_Blower_2025_HD.jpg)           | 400 × 400            |
| mario-enriquez.webp    | [City original](https://www.stocktonca.gov/Images/Government/City%20Council/Approver_Mario_Enr%C3%ADquez_HD.jpg)   | 400 × 400            |
| brando-villapudua.webp | [City original](https://www.stocktonca.gov/Images/Government/City%20Council/Approver_Villapudua_HD%20-%20Copy.jpg) | 400 × 400            |

Rights limit: these are verified official portraits publicly displayed by the City, but an explicit open license or photographer/rightsholder statement for these seven current files was not located. The City website footer displays a City copyright notice. Do not label these files CC-licensed or claim individual consent/permission. An older, different [City portrait of Fugazi on Commons](https://commons.wikimedia.org/wiki/File:Approver_ChristinaFugazi_Web.jpg) is classified there as a California-government public-domain work; that classification does not independently establish the creator or rights of these newer files. Attribution such as “Official portraits: City of Stockton” supplies provenance, not permission. Publisher must resolve its editorial-use basis before public release; names, districts and votes can stand alone if portraits are withheld.

## Integration and scope

The former `wcu-website/public/images/deflockstockton/hero-surveillance.jpg` is described as a generated placeholder in commit 411fd13's implementation-decisions document. It was not reused.

Existing `scripts/generate-hero-assets.mjs` is tied to separate hero-wall/background directories and was not run. Portrait delivery encoding uses the existing Sharp dependency; no dependency was added. The seven WebPs total approximately 96 KB. An alternative CC0 photograph by Bruxton was evaluated but is not included in the implementation.

This document records image provenance only; it is not the change audit for the surrounding overview redesign.
