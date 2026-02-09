# Angular 21 ZONELESS Project Rules

This project is Angular 21, Zoneless.

Strict rules for all generated code:

- DO NOT use zone.js or NgZone.
- Use Signals API only (`signal`, `computed`, `effect`).
- Use standalone components exclusively.
- Always use ChangeDetectionStrategy.OnPush.
- Do NOT generate NgModules.
- Prefer `inject()` over constructor injection.
- Avoid legacy RxJS patterns unless strictly necessary.
- All tests should respect zoneless behavior.
- Keep imports clean: no deprecated Angular APIs.
