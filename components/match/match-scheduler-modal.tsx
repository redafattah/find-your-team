"use client"

import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import RadioCardsGroup from "../customized/radio-group/RadioCardsGroup"
import { PlusCircle } from "lucide-react"


export default function MatchSchedulerModal() {
  const [location, setLocation] = useState("")
  const [matchType, setMatchType] = useState("5v5")
  const [playersNeeded, setPlayersNeeded] = useState<number>(10)
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [rules, setRules] = useState("")
  const [fee, setFee] = useState("free")

  const handleSave = () => {
    const data = {
      location,
      matchType,
      playersNeeded,
      date,
      time,
      description,
      rules,
      fee,
    }

    console.log("Match scheduled:", data)
    alert("✅ Match scheduled (placeholder)")
  }
  const matchOptions = [
    { value: "5v5", label: "5 vs 5" },
    { value: "7v7", label: "7 vs 7" },
    { value: "11v11", label: "11 vs 11" },
  ]
  const feeOptions = [
  { value: "free", label: "Free" },
  { value: "10", label: "10 MAD" },
  { value: "20", label: "20 MAD" },
]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=""><PlusCircle/>Match</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>📅 Schedule a Match</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Location Dropdown */}
          <div>
            <Label htmlFor="location">Location</Label>
            <Select onValueChange={setLocation}>
              <SelectTrigger className="mt-3 bg-indigo-600/25 dark:text-white w-full text-indigo-600 border-none shadow-none">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
              <SelectGroup className="[&_div:focus]:bg-indigo-600 [&_div:focus]:text-white">
              
                <SelectItem value="Sport X">Sport X</SelectItem>
                <SelectItem value="Sport Y">Sport Y</SelectItem>
                <SelectItem value="Sport G">Sport G</SelectItem>
                <SelectItem value="Sport Z">Sport Z</SelectItem>
                
             
              </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Match Type */}
          <div>
            <Label className="mb-3">Match Type</Label>
            <RadioCardsGroup value={matchType} onChange={setMatchType} options={matchOptions} columns={3} />
          </div>

          {/* Players Needed */}
          <div>
            <Label htmlFor="players">Players Needed</Label>
            <div className="flex gap-2">
            <Slider
              defaultValue={[playersNeeded]}
              min={4}
              max={10}
              step={1}
              onValueChange={([value]) => setPlayersNeeded(value)}
            />
            <span className="text-sm text-muted-foreground border justify-end  flex px-2 py-2 w-[100px]">
             {playersNeeded} players
            </span>

            </div>
            
          </div>

          {/* Date + Time */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="time">Time</Label>
              <Input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your match"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Rules */}
          <div>
            <Label htmlFor="rules">Rules</Label>
            <Textarea
              id="rules"
              placeholder="E.g. No sliding tackles, 25 min halves..."
              value={rules}
              onChange={(e) => setRules(e.target.value)}
            />
          </div>

          {/* Pre-pay Fee Selection */}
          <div>
            <Label className="mb-3">Pre-pay Fee</Label>
            <RadioCardsGroup value={fee} onChange={setFee} options={feeOptions} columns={3} />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSave}>Save Match</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
