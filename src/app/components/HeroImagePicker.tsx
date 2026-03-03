import { useState } from "react";

const IMAGES = [
  // — Original 7 —
  {
    id: 1,
    label: "Brilliant Cut Diamond Macro",
    url: "https://images.unsplash.com/photo-1771792880533-662f7bc7d697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlsbGlhbnQlMjBjdXQlMjBkaWFtb25kJTIwbWFjcm8lMjBzcGFya2xlJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcyNDQwNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    label: "Luxury Diamond Necklace Editorial",
    url: "https://images.unsplash.com/photo-1721807551235-4072be6913c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwbmVja2xhY2UlMjBnb2xkJTIwamV3ZWxsZXJ5JTIwZGFyayUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NzI0NDA0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    label: "Solitaire Engagement Ring",
    url: "https://images.unsplash.com/photo-1727726225026-7730bbcd5062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjBwbGF0aW51bSUyMHNvbGl0YWlyZSUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzI0NDA0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    label: "Rough Diamond Crystal",
    url: "https://images.unsplash.com/photo-1608278827674-db33988721e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VnaCUyMGRpYW1vbmQlMjBjcnlzdGFsJTIwZ2Vtc3RvbmUlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcyNDQwNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    label: "Jewellery Workshop Craftsman",
    url: "https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbGxlcnklMjB3b3Jrc2hvcCUyMGNyYWZ0c21hbiUyMGRpYW1vbmQlMjBzZXR0aW5nJTIwaGFuZHN8ZW58MXx8fHwxNzcyNDQwNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    label: "Diamond Facets Light Refraction",
    url: "https://images.unsplash.com/photo-1656670502516-c1c778d06f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZmFjZXRzJTIwZ2VvbWV0cmljJTIwbGlnaHQlMjByZWZyYWN0aW9uJTIwYWJzdHJhY3QlMjBsdXh1cnl8ZW58MXx8fHwxNzcyNDQwNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    label: "Diamond Ring on Black Velvet",
    url: "https://images.unsplash.com/photo-1653316889237-b5cc78e719c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGx1eHVyeSUyMGJsYWNrJTIwdmVsdmV0JTIwY2xvc2UlMjB1cCUyMHNwYXJrbGV8ZW58MXx8fHwxNzcyNDQwNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  // — Batch 2 (8–15) —
  {
    id: 8,
    label: "Loose Diamonds Pile",
    url: "https://images.unsplash.com/photo-1624634547264-32e624af4a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb29zZSUyMGRpYW1vbmRzJTIwcGlsZSUyMHNwYXJrbGluZyUyMHdoaXRlJTIwYmFja2dyb3VuZCUyMGx1eHVyeXxlbnwxfHx8fDE3NzI0NDEwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    label: "Gold Jewellery Dark Velvet Display",
    url: "https://images.unsplash.com/photo-1601244732063-bcaac519db4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxsZXJ5JTIwbHV4dXJ5JTIwcmluZ3MlMjBicmFjZWxldHMlMjBkYXJrJTIwdmVsdmV0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzI0NDEwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 10,
    label: "Diamond Cutting & Manufacturing",
    url: "https://images.unsplash.com/photo-1716469802026-ad9275f8d724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwY3V0dGluZyUyMHBvbGlzaGluZyUyMG1hbnVmYWN0dXJpbmclMjBwcmVjaXNpb24lMjB0b29sc3xlbnwxfHx8fDE3NzI0NDEwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 11,
    label: "Dubai Night Cityscape",
    url: "https://images.unsplash.com/photo-1732360487817-f29cc82d8eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGdvbGQlMjBzb3VrJTIwbWFya2V0JTIwYWVyaWFsJTIwbmlnaHQlMjBsdXh1cnl8ZW58MXx8fHwxNzcyNDQxMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 12,
    label: "Emerald Cut Diamond Ring",
    url: "https://images.unsplash.com/photo-1685970730959-eb22c7b2bcd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwY3V0JTIwZGlhbW9uZCUyMHJpbmclMjBjbG9zZSUyMHVwJTIwZWxlZ2FudCUyMGJsYWNrfGVufDF8fHx8MTc3MjQ0MTAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 13,
    label: "Diamond Pendant Necklace",
    url: "https://images.unsplash.com/photo-1679973296607-e77096f13cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwbmVja2xhY2UlMjBwZW5kYW50JTIwc3BhcmtsZSUyMGVkaXRvcmlhbCUyMGRhcmslMjBsdXh1cnl8ZW58MXx8fHwxNzcyNDQxMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 14,
    label: "Crystal Prism Light Rainbow",
    url: "https://images.unsplash.com/photo-1767131543213-04c09089011f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZSUyMGNyeXN0YWwlMjBtYWNybyUyMHByaXNtJTIwbGlnaHQlMjByYWluYm93JTIwcmVmcmFjdGlvbnxlbnwxfHx8fDE3NzI0NDEwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 15,
    label: "Luxury Jewellery Showroom",
    url: "https://images.unsplash.com/photo-1681310483042-64aa6776f112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbGxlcnklMjBkaXNwbGF5JTIwY2FzZSUyMHNob3dyb29tJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI0NDEwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  // — Batch 3 (16–35) —
  {
    id: 16,
    label: "Tennis Diamond Bracelet",
    url: "https://images.unsplash.com/photo-1546956923-f6ba9089ccde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXQlMjB0ZW5uaXMlMjBsdXh1cnklMjBzcGFya2xlJTIwYmxhY2slMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MjQ0MTE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 17,
    label: "Jewellery Gift Box Velvet",
    url: "https://images.unsplash.com/photo-1679973300047-0edc118b7d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbGxlcnklMjBib3glMjB2ZWx2ZXQlMjBsdXh1cnklMjBkaWFtb25kJTIwZ2lmdCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzI0NDExNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 18,
    label: "Diamond Drop Earrings",
    url: "https://images.unsplash.com/photo-1733256528554-3b2ae8f1b3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZWFycmluZ3MlMjBkcm9wJTIwY2hhbmRlbGllciUyMHNwYXJrbGUlMjBkYXJrJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc3MjQ0MTE2MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 19,
    label: "Blue Sapphire Gemstone Macro",
    url: "https://images.unsplash.com/photo-1767921783351-b026a735f708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZSUyMHNhcHBoaXJlJTIwYmx1ZSUyMGx1eHVyeSUyMGRhcmslMjBtYWNybyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyNDQxMTYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 20,
    label: "Gold Bokeh Sparkle Abstract",
    url: "https://images.unsplash.com/photo-1600631864543-3220a348c5bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpZ2h0JTIwYm9rZWglMjBzcGFya2xlJTIwZ29sZCUyMGJsYWNrJTIwbHV4dXJ5JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzI0NDExNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 21,
    label: "Royal Diamond Tiara Crown",
    url: "https://images.unsplash.com/photo-1673640525972-3c0dd5e6a933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwdGlhcmElMjBjcm93biUyMGx1eHVyeSUyMHJveWFsJTIwamV3ZWxsZXJ5JTIwZGlzcGxheXxlbnwxfHx8fDE3NzI0NDExNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 22,
    label: "Jeweller Loupe Precision Work",
    url: "https://images.unsplash.com/photo-1623365545467-d0f2c7ecd677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbGxlciUyMGNyYWZ0c21hbiUyMGhhbmRzJTIwcHJlY2lzaW9uJTIwd29yayUyMG1hZ25pZmllciUyMGxvdXBlfGVufDF8fHx8MTc3MjQ0MTE2NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 23,
    label: "Pear Cut Diamond Pendant",
    url: "https://images.unsplash.com/photo-1763256614589-199db7a3bd51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFyJTIwY3V0JTIwZGlhbW9uZCUyMGRyb3AlMjBwZW5kYW50JTIwZ29sZCUyMGNoYWluJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjQ0MTE2NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 24,
    label: "Diamond Ring on Fingers",
    url: "https://images.unsplash.com/photo-1762505464446-c0760d740aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFya2xpbmclMjBkaWFtb25kJTIwcmluZyUyMGhhbmQlMjB3b21hbiUyMGZpbmdlcnMlMjBlbGVnYW50JTIwY2xvc2V8ZW58MXx8fHwxNzcyNDQxMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 25,
    label: "Rose Gold Rings Elegant",
    url: "https://images.unsplash.com/photo-1603561593143-2d9242789dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZ29sZCUyMGpld2VsbGVyeSUyMHJpbmdzJTIwZWxlZ2FudCUyMHBpbmslMjBzb2Z0JTIwbHV4dXJ5fGVufDF8fHx8MTc3MjQ0MTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 26,
    label: "Diamond Mining Underground",
    url: "https://images.unsplash.com/photo-1554107851-e594c592ed36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwbWluaW5nJTIwcm91Z2glMjBzdG9uZSUyMHVuZGVyZ3JvdW5kJTIwY2F2ZSUyMGxpZ2h0fGVufDF8fHx8MTc3MjQ0MTE2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 27,
    label: "Jewellery Still Life Gold Moody",
    url: "https://images.unsplash.com/photo-1712280801139-b045c71aa8ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbGxlcnklMjBwaG90b2dyYXBoeSUyMHN0aWxsJTIwbGlmZSUyMGdvbGQlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcyNDQxMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 28,
    label: "White Diamond Macro Sparkle",
    url: "https://images.unsplash.com/photo-1629076093037-409582e381df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRpYW1vbmQlMjBzcGFya2xlJTIwbWFjcm8lMjBzaGFsbG93JTIwZGVwdGglMjBvZiUyMGZpZWxkfGVufDF8fHx8MTc3MjQ0MTE2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 29,
    label: "Gold Chain Necklace Dark",
    url: "https://images.unsplash.com/photo-1619525673983-81151d6cc193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY2hhaW4lMjBuZWNrbGFjZSUyMGx1eHVyeSUyMGNsb3NlJTIwdXAlMjBkYXJrJTIwYmFja2dyb3VuZCUyMHNoaW55fGVufDF8fHx8MTc3MjQ0MTE2OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 30,
    label: "Jewellery Design Atelier Sketch",
    url: "https://images.unsplash.com/photo-1644258676710-ffb99d7d7a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbGxlcnklMjBkZXNpZ24lMjBza2V0Y2glMjBhdGVsaWVyJTIwd29ya3Nob3AlMjBsdXh1cnklMjBmYXNoaW9ufGVufDF8fHx8MTc3MjQ0MTE2OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 31,
    label: "Princess Cut Diamond Ring",
    url: "https://images.unsplash.com/photo-1669738202871-1997517de7d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmluY2VzcyUyMGN1dCUyMGRpYW1vbmQlMjByaW5nJTIwcGxhdGludW0lMjBiYW5kJTIwbHV4dXJ5JTIwZGFya3xlbnwxfHx8fDE3NzI0NDExNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 32,
    label: "Dubai Luxury Skyline Aerial",
    url: "https://images.unsplash.com/photo-1583768721918-ab2b99f01a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBEdWJhaSUyMHNreWxpbmUlMjBnb2xkJTIwYXJjaGl0ZWN0dXJlJTIwbmlnaHQlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3MjQ0MTE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 33,
    label: "Gold Wedding Band Macro Bokeh",
    url: "https://images.unsplash.com/photo-1758297679778-d308606a3f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwd2VkZGluZyUyMHJpbmclMjBiYW5kJTIwbWFjcm8lMjBib2tlaCUyMGx1eHVyeSUyMGNsb3NldXB8ZW58MXx8fHwxNzcyNDQxMTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 34,
    label: "Luxury Diamond Watch Gold",
    url: "https://images.unsplash.com/photo-1588559674156-c5984ed49b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGRpYW1vbmQlMjBnb2xkJTIwdGltZXBpZWNlJTIwZGFyayUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyNDQxMTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 35,
    label: "Jewellery Boutique Interior",
    url: "https://images.unsplash.com/photo-1697380582263-ba9f5ef8cefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbGxlcnklMjBzdG9yZSUyMGJvdXRpcXVlJTIwaW50ZXJpb3IlMjBsdXh1cnklMjBtYXJibGUlMjBnb2xkJTIwc2hlbGZ8ZW58MXx8fHwxNzcyNDQxMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

interface Props {
  currentUrl: string;
  onSelect: (url: string) => void;
  onClose: () => void;
}

export function HeroImagePicker({ currentUrl, onSelect, onClose }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<string>(currentUrl);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(10,7,3,0.92)" }}
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-5xl mx-4 rounded-sm overflow-hidden"
        style={{ background: "#0C0905", border: "1px solid rgba(201,169,110,0.25)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-5 border-b"
          style={{ borderColor: "rgba(201,169,110,0.18)" }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#FEFCF8",
                fontWeight: 400,
                fontSize: "22px",
              }}
            >
              Choose Hero Background
            </h2>
            <p
              className="text-xs mt-1 tracking-widest uppercase"
              style={{ color: "#9A8B65", fontFamily: "'Jost', sans-serif" }}
            >
              Click an image to preview · Apply to confirm
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center transition-colors"
            style={{ color: "rgba(254,252,248,0.5)", fontFamily: "'Jost', sans-serif", fontSize: "20px" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#C9A96E")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(254,252,248,0.5)")}
          >
            ✕
          </button>
        </div>

        {/* Grid */}
        <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto">
          {IMAGES.map((img) => {
            const isSelected = selected === img.url;
            return (
              <button
                key={img.id}
                onClick={() => setSelected(img.url)}
                onMouseEnter={() => setHovered(img.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex flex-col overflow-hidden rounded-sm text-left transition-all duration-200"
                style={{
                  border: isSelected
                    ? "2px solid #C9A96E"
                    : "2px solid rgba(201,169,110,0.12)",
                  outline: isSelected ? "none" : "none",
                  transform: hovered === img.id && !isSelected ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Thumbnail */}
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "65%" }}>
                  <img
                    src={img.url}
                    alt={img.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: hovered === img.id ? "scale(1.06)" : "scale(1)" }}
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-200"
                    style={{
                      background: "linear-gradient(180deg, transparent 40%, rgba(10,7,3,0.85) 100%)",
                      opacity: hovered === img.id || isSelected ? 1 : 0.5,
                    }}
                  />
                  {/* Selected badge */}
                  {isSelected && (
                    <div
                      className="absolute top-2 right-2 px-2 py-0.5 text-xs tracking-widest uppercase"
                      style={{
                        background: "#C9A96E",
                        color: "#1A1108",
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 600,
                        fontSize: "9px",
                      }}
                    >
                      Selected
                    </div>
                  )}
                </div>
                {/* Label */}
                <div
                  className="px-3 py-2"
                  style={{ background: isSelected ? "rgba(201,169,110,0.08)" : "rgba(20,14,8,0.8)" }}
                >
                  <p
                    className="text-xs leading-tight"
                    style={{
                      color: isSelected ? "#C9A96E" : "rgba(254,252,248,0.6)",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {img.label}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer actions */}
        <div
          className="flex items-center justify-between px-8 py-5 border-t"
          style={{ borderColor: "rgba(201,169,110,0.18)" }}
        >
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "rgba(154,139,101,0.6)", fontFamily: "'Jost', sans-serif" }}
          >
            {IMAGES.length} images available
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 text-xs tracking-widest uppercase border transition-all duration-200"
              style={{
                borderColor: "rgba(201,169,110,0.25)",
                color: "rgba(254,252,248,0.5)",
                fontFamily: "'Jost', sans-serif",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#C9A96E")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(254,252,248,0.5)")}
            >
              Cancel
            </button>
            <button
              onClick={() => { onSelect(selected); onClose(); }}
              className="px-8 py-3 text-xs tracking-widest uppercase transition-all duration-200"
              style={{
                background: "#C9A96E",
                color: "#1A1108",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#E8D5A8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#C9A96E")}
            >
              Apply Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}