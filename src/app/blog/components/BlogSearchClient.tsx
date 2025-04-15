"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  IconButton,
  Select,
  MenuItem,
  InputAdornment,
  Stack,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BlogCard from "@/components/blog/BlogCard";
import Layout from "@/components/layout/Layout";
import ConstrainedContainer from "@/components/layout/container/constrained-container";

export default function BlogSearchClient({
  initialPosts,
}: {
  initialPosts: any[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"dateAsc" | "dateDesc">(
    "dateDesc"
  );
  const [readTimeFilter, setReadTimeFilter] = useState<string>("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Gather all available tags from the initialPosts array
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    initialPosts.forEach((post) => {
      if (Array.isArray(post.fields.tags)) {
        post.fields.tags.forEach((tag: string) => tagSet.add(tag));
      }
    });
    return Array.from(tagSet);
  }, [initialPosts]);

  // Apply search, filters, sorting
  const filteredPosts = useMemo(() => {
    let posts = [...initialPosts];

    // Search
    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      posts = posts.filter((post) => {
        const title = post.fields.title?.toLowerCase() || "";
        const desc = post.fields.shortDescription?.toLowerCase() || "";
        return title.includes(lowerSearch) || desc.includes(lowerSearch);
      });
    }

    // Read Time Filter
    if (readTimeFilter !== "All") {
      posts = posts.filter((post) => {
        const time = post.fields.readTime || 0;
        if (readTimeFilter === "short") return time <= 5;
        if (readTimeFilter === "medium") return time > 5 && time <= 10;
        return time > 10;
      });
    }

    // Tag Filters
    if (selectedTags.length > 0) {
      posts = posts.filter((post) => {
        const postTags = Array.isArray(post.fields.tags)
          ? post.fields.tags
          : [];
        return selectedTags.every((tag) => postTags.includes(tag));
      });
    }

    // Sort
    posts.sort((a, b) => {
      const dateA = new Date(a.fields.publishedDate || 0).getTime();
      const dateB = new Date(b.fields.publishedDate || 0).getTime();
      return sortOrder === "dateAsc" ? dateA - dateB : dateB - dateA;
    });

    return posts;
  }, [initialPosts, searchTerm, sortOrder, readTimeFilter, selectedTags]);

  return (
    <Layout>
      <ConstrainedContainer>
        {/* Page Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 1, mt: 5 }}>
            Blog
          </Typography>
          <Typography variant="body1">
            Insights, tutorials, and news about Web3, blockchain development,
            and the future of decentralized technology.
          </Typography>
        </Box>

        {/* Search Field */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: 500,
            mx: "auto",
            mb: 3,
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
          }}
        >
          <TextField
            fullWidth
            placeholder="Search blogs..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              "& fieldset": { border: "none" },
              input: { pl: 2 },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton sx={{ color: "primary.main" }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Filters / Sorting */}
        <Box
          sx={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            mb: 3,
          }}
        >
          {/* Read Time Filter */}
          <Select
            size="small"
            value={readTimeFilter}
            onChange={(e) => setReadTimeFilter(e.target.value)}
            sx={{ minWidth: 180 }}
          >
            <MenuItem value="All">All Read Times</MenuItem>
            <MenuItem value="short">Under 5 min</MenuItem>
            <MenuItem value="medium">5–10 min</MenuItem>
            <MenuItem value="long">10+ min</MenuItem>
          </Select>

          {/* Sort By Date */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2">Sort by Date:</Typography>
            <Select
              size="small"
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(e.target.value as "dateAsc" | "dateDesc")
              }
            >
              <MenuItem value="dateDesc">Newest First</MenuItem>
              <MenuItem value="dateAsc">Oldest First</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* Tag Filters */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1.5,
            mb: 6,
          }}
        >
          {selectedTags.length > 0 && (
            <Chip
              label="Clear Filters"
              onClick={() => setSelectedTags([])}
              sx={{
                border: "1px solid #5AF3DE",
                color: "#5AF3DE",
                backgroundColor: "transparent",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#173540",
                },
              }}
            />
          )}

          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <Chip
                key={tag}
                label={tag}
                clickable
                sx={{
                  border: "1px solid #5AF3DE",
                  color: isSelected ? "#000" : "#5AF3DE",
                  backgroundColor: isSelected ? "#5AF3DE" : "transparent",
                  fontWeight: isSelected ? 600 : 400,
                  "&:hover": {
                    backgroundColor: isSelected ? "#4EE0CE" : "#0F2E3D",
                  },
                }}
                onClick={() => {
                  setSelectedTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag]
                  );
                }}
              />
            );
          })}
        </Box>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <Box textAlign="center" mt={4}>
            <Typography variant="h6" color="text.secondary">
              More Blogs coming soon!
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {filteredPosts.map((post) => (
              <Grid item key={post.sys.id} xs={12} sm={6} md={4}>
                <BlogCard post={post} />
              </Grid>
            ))}
          </Grid>
        )}
      </ConstrainedContainer>
    </Layout>
  );
}
