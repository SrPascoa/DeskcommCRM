---
impacto: nada_mudou
secao: corrigido
titulo: A app instalada no telemóvel deixa de pedir login com a sessão ainda válida
---

Ao abrir o CRM pela app instalada no ecrã inicial (Android), o cookie de sessão `SameSite=Strict` não viajava na navegação de arranque, o `proxy` mandava a pessoa para `/login` e a tela mostrava o formulário embora a sessão existisse — recarregar não resolvia, só abrir `/app` pelo navegador. Agora a tela de login confere, por um pedido feito do próprio documento, se há sessão, e havendo segue para o destino. O cookie continua `Strict`. Nada a fazer na VPS.
