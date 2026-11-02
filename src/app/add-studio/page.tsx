"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AddStudioPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [securityDeposit, setSecurityDeposit] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [amenities, setAmenities] = useState("");
  const [overview, setOverview] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!category) {
      toast.error("Please select a studio category");
      return;
    }

    const newStudio = {
      title,
      category,
      hourlyRate: Number(hourlyRate),
      securityDeposit: Number(securityDeposit),
      maxCapacity: Number(maxCapacity),
      location,
      address,
      imageUrl,
      amenities: amenities.split(",").map((item) => item.trim()).filter(Boolean),
      overview,
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:8000/api/studios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudio),
      });

      if (!response.ok) {
        throw new Error("Failed to add studio");
      }

      toast.success("Studio added successfully!");
      router.push("/studios");
      router.refresh();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add New Studio</h1>
        <p className="mt-2 text-muted-foreground">
          Share your creative space with creators.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Studio Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter studio name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <Select
            value={category}
            onValueChange={(value) => setCategory(value ?? "")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Photo Studio">Photo Studio</SelectItem>
              <SelectItem value="Sound Stage">Sound Stage</SelectItem>
              <SelectItem value="Podcast Room">Podcast Room</SelectItem>
              <SelectItem value="Music Suite">Music Suite</SelectItem>
              <SelectItem value="Art Workshop">Art Workshop</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="hourlyRate">Hourly Rate</Label>
            <Input
              id="hourlyRate"
              type="number"
              min="1"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              placeholder="Enter hourly rate"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="securityDeposit">Security Deposit</Label>
            <Input
              id="securityDeposit"
              type="number"
              min="0"
              value={securityDeposit}
              onChange={(e) => setSecurityDeposit(e.target.value)}
              placeholder="Enter security deposit"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="maxCapacity">Maximum Capacity</Label>
          <Input
            id="maxCapacity"
            type="number"
            min="1"
            value={maxCapacity}
            onChange={(e) => setMaxCapacity(e.target.value)}
            placeholder="Number of people"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or area"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Full Address</Label>
          <Input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter full address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl">Studio Image URL</Label>
          <Input
            id="imageUrl"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Paste image URL"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="amenities">Amenities</Label>
          <Input
            id="amenities"
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
            placeholder="WiFi, AC, Lighting, Parking"
          />
          <p className="text-sm text-muted-foreground">
            Separate amenities with commas.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="overview">Studio Overview</Label>
          <Textarea
            id="overview"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            placeholder="Describe your studio..."
            rows={5}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Adding Studio..." : "Add Studio"}
        </Button>
      </form>
    </div>
  );
}