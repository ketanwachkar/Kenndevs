"use client";

import { useState, useEffect } from "react";
import { MapPin, Building2 } from "lucide-react";

interface NodeLocation {
  city: string;
  stateCountry: string;
  ping: number;
  status: string;
  isPrimaryOffice?: boolean;
  address: string;
  coords: { x: number; y: number };
}

const locations: NodeLocation[] = [
  { city: "Pune Hub", stateCountry: "Maharashtra, India", ping: 8, status: "Engineering & Innovation Hub", isPrimaryOffice: true, address: "World Trade Center, Kharadi / Baner IT Park, Pune, MH 411014", coords: { x: 68, y: 52 } },
  { city: "San Francisco", stateCountry: "USA (West)", ping: 140, status: "US Enterprise Gateway", address: "Market St, San Francisco, CA", coords: { x: 18, y: 38 } },
  { city: "London", stateCountry: "UK (Europe)", ping: 110, status: "EU Cloud Datacenter", address: "Tech City, London, UK", coords: { x: 52, y: 28 } },
  { city: "Tokyo", stateCountry: "Japan (APAC)", ping: 85, status: "APAC Mesh Center", address: "Shinjuku, Tokyo, Japan", coords: { x: 84, y: 42 } },
];

export default function GlobalPresenceMap() {
  const [selectedNode, setSelectedNode] = useState<NodeLocation>(locations[0]);
  const [activePulse, setActivePulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePulse((prev) => (prev + 1) % locations.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-card/70 backdrop-blur-xl p-6 shadow-2xl space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 text-primary">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-foreground font-headline">Office Locations & Server Hubs</h4>
            <p className="text-xs text-muted-foreground">Pune Hub • Global Operations</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 text-xs font-mono text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span>PUNE HUB ACTIVE</span>
        </div>
      </div>

      {/* Cyber Map Visual */}
      <div className="relative w-full h-56 bg-slate-950 rounded-xl border border-white/10 overflow-hidden p-4 select-none flex flex-col justify-between">
        {/* World Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <path d="M 270 110 Q 300 90 330 115" fill="none" stroke="#bb86fc" strokeWidth="2" strokeDasharray="3 3" />
        </svg>

        {/* Location Pins */}
        {locations.map((loc, idx) => {
          const isSelected = selectedNode.city === loc.city;
          const isPulsing = activePulse === idx;
          return (
            <div
              key={loc.city}
              onClick={() => setSelectedNode(loc)}
              style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
            >
              <span className={`absolute -inset-2 rounded-full opacity-75 transition-all ${isPulsing ? "bg-primary animate-ping" : ""}`} />
              <div className={`relative h-4 w-4 rounded-full border-2 transition-all ${isSelected ? "bg-primary border-white scale-125 shadow-lg shadow-primary" : loc.isPrimaryOffice ? "bg-emerald-400 border-white" : "bg-slate-900 border-primary/60"}`} />
              
              <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-black/90 border border-white/15 text-[10px] font-mono text-foreground opacity-90 group-hover:opacity-100 transition-opacity">
                {loc.city}
              </div>
            </div>
          );
        })}

        {/* Selected Hub Info */}
        <div className="relative z-20 mt-auto p-3 rounded-lg bg-black/80 border border-white/15 text-xs font-mono">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-foreground font-bold">{selectedNode.city}, {selectedNode.stateCountry}</span>
            </div>
            <span className="text-emerald-400 font-bold text-[11px]">{selectedNode.status}</span>
          </div>
          <p className="text-[11px] text-muted-foreground line-clamp-1">{selectedNode.address}</p>
        </div>
      </div>

      {/* Office Badges Grid */}
      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
        <div className="p-3 rounded-xl bg-white/5 border border-cyan-500/30 flex flex-col justify-between">
          <div className="text-cyan-400 font-bold text-sm">Pune Hub</div>
          <div className="text-[11px] text-muted-foreground mt-1">WTC / Baner Park, MH</div>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div className="text-emerald-400 font-bold text-sm">Direct Email</div>
          <div className="text-[11px] text-muted-foreground mt-1 truncate">ketanwachar2000@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
