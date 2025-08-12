"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Select,
  Slider,
  Typography,
  useTheme,
} from "@mui/material";
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { TbCurrencyTaka } from "react-icons/tb";
import { FaMapMarkerAlt, FaBed } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

interface PropertyFilterProps {
  onFilterChange?: (filters: {
    propertyTypes: string[];
    priceRange: number[];
    districtAreas: string[];
    bhk: string;
    sqftRange: number[];
    enabledFilters: {
      propertyTypes: boolean;
      priceRange: boolean;
      districtAreas: boolean;
      bhk: boolean;
      sqftRange: boolean;
    };
  }) => void;
}

export default function PropertyFilter({ onFilterChange }: PropertyFilterProps) {
  const theme = useTheme();

  // Nested property types
  const [propertyTypeGroups, setPropertyTypeGroups] = useState<
    { category: string; subTypes: string[] }[]
  >([]);

  const [districts, setDistricts] = useState<{ name: string; areas: string[] }[]>([]);

  // Selected filter values
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([5000, 500000]);
  const [selectedDistrictAreas, setSelectedDistrictAreas] = useState<string[]>([]);
  const [bhk, setBhk] = useState("");
  const [sqftRange, setSqftRange] = useState<number[]>([500, 5000]);

  // Enable toggles
  const [enabledFilters, setEnabledFilters] = useState({
    propertyTypes: false,
    priceRange: false,
    districtAreas: false,
    bhk: false,
    sqftRange: false,
  });

  // Store latest onFilterChange in a ref (optional)
  const onFilterChangeRef = useRef(onFilterChange);
  useEffect(() => {
    onFilterChangeRef.current = onFilterChange;
  }, [onFilterChange]);

  useEffect(() => {
    setPropertyTypeGroups([
      { category: "Residential", subTypes: ["Flat/Apartment", "Villa", "Duplex"] },
      { category: "Commercial", subTypes: ["Office", "Shop", "Warehouse"] },
      { category: "Land", subTypes: ["Agricultural", "Industrial", "Plot"] },
    ]);

    setDistricts([
      { name: "Dhaka", areas: ["Banani", "Gulshan", "Rampura"] },
      { name: "Chittagong", areas: ["Agrabad", "Pahartali"] },
      { name: "Sylhet", areas: ["Zindabazar", "Amberkhana"] },
    ]);
  }, []);

  // PROPERTY TYPE logic
  const handleSubTypeChange = (subType: string, checked: boolean) => {
    if (checked) setSelectedTypes([...selectedTypes, subType]);
    else setSelectedTypes(selectedTypes.filter((t) => t !== subType));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const group = propertyTypeGroups.find((g) => g.category === category);
    if (!group) return;
    if (checked) {
      const newSelected = Array.from(new Set([...selectedTypes, ...group.subTypes]));
      setSelectedTypes(newSelected);
    } else {
      setSelectedTypes(selectedTypes.filter((t) => !group.subTypes.includes(t)));
    }
  };

  // LOCATION logic
  const handleDistrictToggle = (districtName: string, checked: boolean) => {
    const district = districts.find((d) => d.name === districtName);
    if (!district) return;

    if (checked) {
      setSelectedDistrictAreas((prev) =>
        Array.from(new Set([...prev, ...district.areas]))
      );
    } else {
      setSelectedDistrictAreas((prev) =>
        prev.filter((area) => !district.areas.includes(area))
      );
    }
  };

  const handleDistrictAreaToggle = (districtName: string, area: string, checked: boolean) => {
    if (checked) {
      setSelectedDistrictAreas((prev) => {
        const updated = [...prev, area];
        // optional: auto-select parent district if all areas selected
        return Array.from(new Set(updated));
      });
    } else {
      setSelectedDistrictAreas((prev) => prev.filter((a) => a !== area));
    }
  };

  const handleEnableToggle = (filterKey: keyof typeof enabledFilters, checked: boolean) => {
    setEnabledFilters({ ...enabledFilters, [filterKey]: checked });
  };

  const handleClear = () => {
    setSelectedTypes([]);
    setPriceRange([5000, 500000]);
    setSelectedDistrictAreas([]);
    setBhk("");
    setSqftRange([500, 5000]);
    setEnabledFilters({
      propertyTypes: false,
      priceRange: false,
      districtAreas: false,
      bhk: false,
      sqftRange: false,
    });

    // Send default "no filter" state to parent so it shows all cards
  if (onFilterChangeRef.current) {
    onFilterChangeRef.current({
      propertyTypes: [],
      priceRange: [0, 0],
      districtAreas: [],
      bhk: "",
      sqftRange: [0, 0],
      enabledFilters: {
        propertyTypes: false,
        priceRange: false,
        districtAreas: false,
        bhk: false,
        sqftRange: false,
      },
    });
  }
  };

    const applyFilters = () => {
    if (onFilterChange) {
      onFilterChange({
        propertyTypes: enabledFilters.propertyTypes ? selectedTypes : [],
        priceRange: enabledFilters.priceRange ? priceRange : [0, 0], // [min, max]
        districtAreas: enabledFilters.districtAreas ? selectedDistrictAreas : [],
        bhk: enabledFilters.bhk ? bhk : "",
        sqftRange: enabledFilters.sqftRange ? sqftRange : [0, 0], // [min, max]
        enabledFilters,
      });
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 5,
        maxWidth: 420,
        mx: "auto",
        borderRadius: 3,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "800",
          mb: 4,
          textAlign: "center",
          color: theme.palette.text.primary,
          letterSpacing: 0.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <FilterAltIcon /> Filter Properties
      </Typography>

      <Box component="form" sx={{ display: "grid", gap: 4 }}>
        {/* PROPERTY TYPE */}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={enabledFilters.propertyTypes}
                onChange={(e) => handleEnableToggle("propertyTypes", e.target.checked)}
                sx={{ color: theme.palette.primary.main }}
              />
            }
            label={
              <Typography sx={{ fontWeight: 700, fontSize: 16, display: "flex", gap: 1 }}>
                <MdOutlineCategory /> Property Type
              </Typography>
            }
          />
          <Box
            sx={{
              ml: 3,
              opacity: enabledFilters.propertyTypes ? 1 : 0.4,
              pointerEvents: enabledFilters.propertyTypes ? "auto" : "none",
            }}
          >
            {propertyTypeGroups.map((group) => {
              const selectedCount = group.subTypes.filter((st) =>
                selectedTypes.includes(st)
              ).length;
              const allSelected = selectedCount === group.subTypes.length;
              const indeterminate =
                selectedCount > 0 && selectedCount < group.subTypes.length;

              return (
                <Box key={group.category} sx={{ mb: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={allSelected}
                        indeterminate={indeterminate}
                        onChange={(e) =>
                          handleCategoryChange(group.category, e.target.checked)
                        }
                      />
                    }
                    label={<Typography sx={{ fontWeight: 700 }}>{group.category}</Typography>}
                  />
                  <FormGroup sx={{ ml: 3 }}>
                    {group.subTypes.map((sub) => (
                      <FormControlLabel
                        key={sub}
                        control={
                          <Checkbox
                            checked={selectedTypes.includes(sub)}
                            onChange={(e) => handleSubTypeChange(sub, e.target.checked)}
                          />
                        }
                        label={sub}
                      />
                    ))}
                  </FormGroup>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* PRICE RANGE */}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={enabledFilters.priceRange}
                onChange={(e) => handleEnableToggle("priceRange", e.target.checked)}
              />
            }
            label={
              <Typography sx={{ fontWeight: 700, fontSize: 16, display: "flex", gap: 1 }}>
                <TbCurrencyTaka /> Price Range
              </Typography>
            }
          />
          <Box
            sx={{
              ml: 3,
              opacity: enabledFilters.priceRange ? 1 : 0.4,
              pointerEvents: enabledFilters.priceRange ? "auto" : "none",
            }}
          >
            <Slider
              value={priceRange}
              onChange={(_, val) => setPriceRange(val as number[])}
              min={5000}
              max={1000000}
              step={5000}
              sx={{ color: theme.palette.primary.main }}
            />
            <Typography
              variant="body2"
              sx={{ mt: 1, fontWeight: 700, color: theme.palette.primary.main }}
            >
              Min: Tk {priceRange[0].toLocaleString()} — Max: Tk {priceRange[1].toLocaleString()}
            </Typography>
          </Box>
        </Box>

        {/* LOCATION */}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={enabledFilters.districtAreas}
                onChange={(e) => handleEnableToggle("districtAreas", e.target.checked)}
              />
            }
            label={
              <Typography sx={{ fontWeight: 700, fontSize: 16, display: "flex", gap: 1 }}>
                <FaMapMarkerAlt /> Location
              </Typography>
            }
          />
          <Box
            sx={{
              ml: 3,
              maxHeight: 140,
              overflowY: "auto",
              opacity: enabledFilters.districtAreas ? 1 : 0.4,
              pointerEvents: enabledFilters.districtAreas ? "auto" : "none",
              borderRadius: 1,
              p: 1,
            }}
          >
            {districts.map((district) => {
              const allAreas = district.areas;
              const selectedCount = allAreas.filter((a) =>
                selectedDistrictAreas.includes(a)
              ).length;
              const allSelected = selectedCount === allAreas.length;
              const indeterminate =
                selectedCount > 0 && selectedCount < allAreas.length;

              return (
                <Box key={district.name} sx={{ mb: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={allSelected}
                        indeterminate={indeterminate}
                        onChange={(e) => handleDistrictToggle(district.name, e.target.checked)}
                      />
                    }
                    label={<Typography sx={{ fontWeight: 700 }}>{district.name}</Typography>}
                  />
                  <FormGroup sx={{ ml: 3 }}>
                    {district.areas.map((area) => (
                      <FormControlLabel
                        key={area}
                        control={
                          <Checkbox
                            checked={selectedDistrictAreas.includes(area)}
                            onChange={(e) =>
                              handleDistrictAreaToggle(district.name, area, e.target.checked)
                            }
                          />
                        }
                        label={area}
                      />
                    ))}
                  </FormGroup>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* BHK */}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={enabledFilters.bhk}
                onChange={(e) => handleEnableToggle("bhk", e.target.checked)}
              />
            }
            label={
              <Typography sx={{ fontWeight: 700, fontSize: 16, display: "flex", gap: 1 }}>
                <FaBed /> BHK Type
              </Typography>
            }
          />
          <FormControl fullWidth sx={{ ml: 3 }}>
            <Select
              value={bhk}
              onChange={(e) => setBhk(e.target.value)}
              disabled={!enabledFilters.bhk}
              size="small"
              displayEmpty
            >
              <MenuItem value="">Any</MenuItem>
              <MenuItem value="1 BHK">1 BHK</MenuItem>
              <MenuItem value="2 BHK">2 BHK</MenuItem>
              <MenuItem value="3 BHK">3 BHK</MenuItem>
              <MenuItem value="4+ BHK">4+ BHK</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* SQFT */}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={enabledFilters.sqftRange}
                onChange={(e) => handleEnableToggle("sqftRange", e.target.checked)}
              />
            }
            label={
              <Typography sx={{ fontWeight: 700, fontSize: 16, display: "flex", gap: 1 }}>
                <SquareFootIcon /> Size (SQFT)
              </Typography>
            }
          />
          <Box
            sx={{
              ml: 3,
              opacity: enabledFilters.sqftRange ? 1 : 0.4,
              pointerEvents: enabledFilters.sqftRange ? "auto" : "none",
            }}
          >
            <Slider
              value={sqftRange}
              onChange={(_, val) => setSqftRange(val as number[])}
              min={500}
              max={10000}
              step={100}
              sx={{ color: theme.palette.primary.main }}
            />
            <Typography
              variant="body2"
              sx={{ mt: 1, fontWeight: 700, color: theme.palette.primary.main }}
            >
              Min: {sqftRange[0].toLocaleString()} sqft — Max: {sqftRange[1].toLocaleString()} sqft
            </Typography>
          </Box>
        </Box>

        {/* BUTTONS */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Clear All
          </Button>
          <Button variant="contained" color="primary" onClick={applyFilters}>
            Apply Filters
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
