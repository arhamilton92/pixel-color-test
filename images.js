// VARIABLES (DATA) =====================================
// ======================================================
const basic =  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0tufi-6e1282e1-edcb-406f-a08c-58645164fdb6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB0dWZpLTZlMTI4MmUxLWVkY2ItNDA2Zi1hMDhjLTU4NjQ1MTY0ZmRiNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.r2ucqRn8XPcmCQdrarr6-cGdO38F0YlYzpGYzzayBQQ";
const spotty = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0uqe5-565e2002-bb50-4c14-ac1b-0e2a744b8842.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB1cWU1LTU2NWUyMDAyLWJiNTAtNGMxNC1hYzFiLTBlMmE3NDRiODg0Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.GKL3Yj8hR4XDirnX-0pjHXNdfHUsyrcyKNhuGNy5-pU";
const smallStripe = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0uqb3-cf5ca64b-d6be-4365-98ec-03f84a045950.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB1cWIzLWNmNWNhNjRiLWQ2YmUtNDM2NS05OGVjLTAzZjg0YTA0NTk1MC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3wYz8IRlGP8mSgymtg2Vjog6Pc17Y-Z7tTfdi-air3g";
const speck = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0urou-b9e8718e-0c5f-43c2-8444-9cc974c68a89.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB1cm91LWI5ZTg3MThlLTBjNWYtNDNjMi04NDQ0LTljYzk3NGM2OGE4OS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.d3Gt_5hoS6pv0upg_3aU4iZbtMClIneIndV6z9JQags";
const doubleSpeck = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0urja-38f27356-a983-41e9-8a80-8208f369c3a0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB1cmphLTM4ZjI3MzU2LWE5ODMtNDFlOS04YTgwLTgyMDhmMzY5YzNhMC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LBnVRulr-VaF2DDG8BSkBVVG_7-F3IpHswKxdZtIOe8";
const trio = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0v0dd-6c5a9901-e70f-4d6b-bcdc-6061006b436f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB2MGRkLTZjNWE5OTAxLWU3MGYtNGQ2Yi1iY2RjLTYwNjEwMDZiNDM2Zi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.KQ3HFsQeAuHICxUdftXnlu6KZgHNtu_mI2UEDqnRxaM";

const spotty2 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0syh2-6ec35ca0-3e1d-4ee5-af55-90442ecfbeed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTBzeWgyLTZlYzM1Y2EwLTNlMWQtNGVlNS1hZjU1LTkwNDQyZWNmYmVlZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.nBJpox6LANbUrMeJeWqn1-z9oGsGclVZZoq8-JsWynU" ;
const smallStripe2 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0tl0j-51987eeb-323e-47da-b1fa-a18acaeeff0c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB0bDBqLTUxOTg3ZWViLTMyM2UtNDdkYS1iMWZhLWExOGFjYWVlZmYwYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.nFXBWmkBjrm7JpIV2CmBAUj-LRz6Yylimer_4AEjZRs";
const speck2 ="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0uzuc-570a21f7-10eb-4d63-92c7-a82ffff55ba1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB1enVjLTU3MGEyMWY3LTEwZWItNGQ2My05MmM3LWE4MmZmZmY1NWJhMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Co_CeCiDIw-OKzJYpO-DKlXERwBHlVA_erR-cVEifD8";
const helmet = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0uy21-961d260e-095b-4ded-aac8-5a3c17a4dbe9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB1eTIxLTk2MWQyNjBlLTA5NWItNGRlZC1hYWM4LTVhM2MxN2E0ZGJlOS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.6TeBYKiF5wpNtMIFpwSqgJWo17U5QOwae4LdTgHh-2o";
const doubleSpeck2 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a65b7269-062e-43df-ba67-7d4dbb2fcc23/de0v0hv-f11f133b-5f01-4778-a177-614903583e6e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY1YjcyNjktMDYyZS00M2RmLWJhNjctN2Q0ZGJiMmZjYzIzXC9kZTB2MGh2LWYxMWYxMzNiLTVmMDEtNDc3OC1hMTc3LTYxNDkwMzU4M2U2ZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dQ51GEuzxLTVKxzUUecBmBclZjWTpcADCNpZ3MN6OgE";
// ==================================================================^