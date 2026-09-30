import markdownIt from "markdown-it";
import markdownItObsidian from "markdown-it-obsidian";
import eleventyBacklinks from 'eleventy-plugin-backlinks';
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

const md = new markdownIt()
	.use(markdownItObsidian)
const result = md.render('# markdown-it rulezz!')

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  
  eleventyConfig.setLibrary("md", markdownIt({ html: true, linkify: true }));

  eleventyConfig.amendLibrary("md", (mdLib) => {
	mdLib.use(markdownItObsidian, {
	  baseURL: "/wiki/", // Adjust this to match your folder/URL structure
	  relativeURLs: false,
	});
  });

	eleventyConfig.addPlugin(eleventyBacklinks, {
		folder: '/wiki', // The folder with your notes
		getData(note) {
			return {
				url: note.url,
				title: note.data.title,
			};
		},
	});

	// Get only content that matches a tag
	eleventyConfig.addCollection("Locations", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("Locations");
	});

	// Get only content that matches a tag
	eleventyConfig.addCollection("People", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("People");
	});

	// Get only content that matches a tag
	eleventyConfig.addCollection("Characters", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("Characters");
	});

	// Get only content that matches a tag
	eleventyConfig.addCollection("Magic", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("Magic");
	});

	// Get only content that matches a tag
	eleventyConfig.addCollection("Culture", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("Culture");
	});

	// Get only content that matches a tag
	eleventyConfig.addCollection("Gameplay", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("Gameplay");
	});

	// Get only content that matches a tag
	eleventyConfig.addCollection("Cards", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("Cards");
	});

	eleventyConfig.addPlugin(eleventyImageTransformPlugin);

};