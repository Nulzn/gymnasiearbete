# 2024-01-24
Har börjat om många gånger, majoriteten av dessa problem har varit med databaserna jag har valt.
Tänker nu använda mig av Supabase (Databas), Clerk (Auth) samt NextJS (TypeScript). Inget mer byte denna gång.
Hittils har det gått utmärkt. Inga problem, dock kan man stötta på problem på dem mest konstiga ställena.

Kommer troligen använda mig av paketet "wasm" och "crypto" för att kunna kryptera lösenorden med SHA256, vilket
är ett av de säkrare krypteringsmetoderna (Dock kan det fortfarande bli problem).

Att komma ihåg till programmeringen:
- npx prisma migrate dev --name init // Detta "registrerar" .schema filen till mitt projekt. Ifall detta inte görs så
                                        kommer jag inte kunna få åtkomst till databas variablerna.

