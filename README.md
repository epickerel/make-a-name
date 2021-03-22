# Make a Name

_A name generator for "perfectly ordinary" test data_

This is a name generator meant to generate simple test data where you need a first and last name and an email. More specifically, it's meant to make _fun_ names.

If you just want test data regardless of the fun aspect, I recommend [Mockaroo](https://www.mockaroo.com/).

### Running

For the moment, it just runs as a yarn script. I'll turn this into a module soon, most likely.

`yarn`
`yarn start`

### Example output

```
{
  "firstName": "Bernadine",
  "lastName": "BwompBlomp",
  "email": "bernadine.bwompblomp@mailinator.com"
}
{
  "firstName": "Moorp-sploorp",
  "lastName": "Bworp",
  "email": "moorp-sploorp.bworp@mailinator.com"
}
{
  "firstName": "Tildi",
  "lastName": "McFloobwobbet",
  "email": "tildi.mcfloobwobbet@mailinator.com"
}
{
  "firstName": "Dwerkblerk",
  "lastName": "Squeerf-breef",
  "email": "dwerkblerk.squeerf-breef@mailinator.com"
}
{
  "firstName": "Popular",
  "lastName": "GeempleFeemple",
  "email": "popular.geemplefeemple@mailinator.com"
}
{
  "firstName": "Bumple",
  "lastName": "Merpeepee",
  "email": "bumple.merpeepee@mailinator.com"
}
{
  "firstName": "Rook",
  "lastName": "ScrungoDwungo",
  "email": "rook.scrungodwungo@mailinator.com"
}
```

### Disclaimer

This uses multiple word libraries at random in addition to random syllable concatenation. It is _entirely_ possible that word combinations come up that would cause offence. Use at your own risk!

### Credit

While this is a work-in-progress, a lot of its magic comes from a fun little function written by [Peter Collingridge](https://www.petercollingridge.co.uk).
