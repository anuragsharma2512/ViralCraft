# Product Requirements Document (PRD)

# Project Name

Shortify AI

Subtitle:
AI-Powered Video Intelligence & Content Automation Platform

Version: 1.0

Status: MVP → Public SaaS Launch

Owner: Founder / Solo Developer

Target Release: 8 Weeks

---

# 1. Executive Summary

Shortify AI is a SaaS platform that transforms long-form YouTube videos into high-quality short-form content automatically.

The platform uses AI, speech recognition, video processing, computer vision, and SEO generation to identify the most engaging moments from long-form videos and convert them into publish-ready YouTube Shorts.

Users can:

* Paste a YouTube URL
* Generate multiple AI-selected clips
* Automatically add captions
* Generate titles and descriptions
* Download clips
* Publish directly to YouTube

The goal is to reduce the content repurposing workflow from several hours to a few minutes.

---

# 2. Problem Statement

Content creators spend significant time manually:

* Watching long videos
* Finding important moments
* Editing clips
* Creating captions
* Writing titles
* Writing descriptions
* Uploading content

This process can take 2–6 hours per video.

Shortify AI automates this workflow.

---

# 3. Business Goals

## Primary Goals

Launch a public SaaS platform.

Acquire first 100 users.

Generate recurring revenue.

Validate product-market fit.

---

## Success Metrics

Monthly Active Users (MAU)

Target:

100+ users

---

Videos Processed

Target:

1,000+ videos

---

Shorts Generated

Target:

5,000+ shorts

---

Upload Completion Rate

Target:

95%

---

Retention

Target:

30%+

---

# 4. Target Users

## Persona 1

YouTubers

Needs:

* Faster content repurposing
* Increased reach
* More uploads

---

## Persona 2

Podcast Creators

Needs:

* Convert podcast episodes into shorts

---

## Persona 3

Coaches & Educators

Needs:

* Share key insights quickly

---

## Persona 4

Agencies

Needs:

* Process multiple clients efficiently

---

# 5. User Journey

Step 1

User signs up.

↓

Step 2

Creates project.

↓

Step 3

Pastes YouTube URL.

↓

Step 4

System downloads video.

↓

Step 5

System transcribes audio.

↓

Step 6

AI identifies viral moments.

↓

Step 7

AI generates shorts.

↓

Step 8

AI creates metadata.

↓

Step 9

User reviews results.

↓

Step 10

User downloads or publishes.

---

# 6. Functional Requirements

## FR-1 Authentication

### Description

Users must create accounts.

### Features

Email Login

Google Login

Forgot Password

Email Verification

JWT Sessions

Profile Management

### Priority

P0

---

## FR-2 Dashboard

### Description

Central management interface.

### Features

Recent Projects

Videos Processed

Shorts Generated

Usage Statistics

Subscription Information

### Priority

P0

---

## FR-3 Project Management

### Features

Create Project

Delete Project

Rename Project

Search Projects

### Priority

P0

---

## FR-4 Video Import

### Input

YouTube URL

### Validation

Valid URL

Public Video

Supported Duration

### Output

Video Metadata

### Metadata

Title

Description

Thumbnail

Duration

Views

Channel Name

### Priority

P0

---

## FR-5 Video Download Service

### Description

Download source video.

### Requirements

High reliability

Retry mechanism

Cloud storage upload

### Storage

AWS S3

### Priority

P0

---

## FR-6 Transcription Engine

### Description

Generate transcript.

### Technology

Faster Whisper

### Output

Transcript

Timestamps

Confidence Scores

### Priority

P0

---

## FR-7 AI Highlight Detection

### Description

Identify best clips.

### Inputs

Transcript

Video metadata

Audio features

### Outputs

Start Time

End Time

Clip Score

Reasoning

### Priority

P0

---

## FR-8 Clip Ranking Engine

### Description

Rank clips.

### Scoring Signals

Emotional Intensity

Topic Importance

Engagement Potential

Speech Energy

Keyword Density

Story Arc Strength

### Output

0–100 score

### Priority

P0

---

## FR-9 Shorts Generator

### Description

Generate vertical videos.

### Features

16:9 → 9:16

Smart Cropping

Speaker Tracking

Object Tracking

Face Detection

Auto Reframing

### Priority

P0

---

## FR-10 Subtitle Generator

### Description

Create captions.

### Styles

Minimal

Podcast

Hormozi

Bold

### Features

Word-by-word

Animated

Burned-in

### Priority

P0

---

## FR-11 Metadata Generator

### Description

Generate publish-ready content.

### Output

Title

Description

Hashtags

Tags

Category

Language

### Priority

P0

---

## FR-12 Shorts Preview Studio

### Features

Video Preview

Trim Clip

Edit Title

Edit Description

Edit Captions

Replace Thumbnail

Approve/Reject

### Priority

P1

---

## FR-13 Download System

### Downloads

MP4

Transcript

SRT

Metadata JSON

### Priority

P0

---

## FR-14 YouTube Integration

### Features

Connect Account

OAuth Login

Select Channel

Upload Shorts

Schedule Posts

### Upload Metadata

Title

Description

Tags

Thumbnail

Privacy Settings

### Priority

P0

---

## FR-15 Subscription Billing

### Provider

Stripe

### Plans

Free

Pro

Business

### Priority

P1

---

# 7. Non-Functional Requirements

## Performance

Video Processing

Target:

Under 5 minutes for 60-minute videos

---

## Availability

99.5%

---

## Scalability

Support:

100 concurrent jobs

MVP

Scale to:

1,000+ jobs

Future

---

## Security

OAuth Security

Encrypted Secrets

Rate Limiting

Input Validation

OWASP Compliance

HTTPS Everywhere

---

## Reliability

Automatic Retries

Dead Letter Queue

Job Recovery

---

# 8. System Architecture

Frontend

Next.js

↓

API Gateway

FastAPI

↓

Redis Queue

↓

Worker Service

↓

AI Services

↓

Storage

↓

Database

---

# 9. Technology Stack

Frontend

Next.js 15

React 19

TypeScript

TailwindCSS

ShadCN

---

Backend

FastAPI

Python

---

Database

PostgreSQL

Prisma

---

Queue

Redis

Celery

---

Storage

AWS S3

---

AI

OpenAI GPT-5.5

Whisper

LangGraph

---

Video Processing

FFmpeg

OpenCV

MediaPipe

---

Auth

Clerk

---

Payments

Stripe

---

Analytics

PostHog

---

Monitoring

Sentry

---

Deployment

Vercel

Railway

Docker

GitHub Actions

---

# 10. Database Schema

Users

Projects

Videos

Transcripts

Clips

Shorts

Jobs

Subscriptions

Payments

YouTubeAccounts

Uploads

Analytics

---

# 11. API Modules

Auth Service

Project Service

Video Service

Transcription Service

AI Analysis Service

Shorts Service

Publishing Service

Billing Service

Analytics Service

---

# 12. AI Pipeline

Video

↓

Audio Extraction

↓

Whisper Transcription

↓

Transcript Segmentation

↓

Highlight Detection Agent

↓

Ranking Agent

↓

Metadata Agent

↓

Short Generation

↓

Publishing

---

# 13. Queue Jobs

DOWNLOAD_VIDEO

EXTRACT_AUDIO

TRANSCRIBE_VIDEO

DETECT_HIGHLIGHTS

GENERATE_SHORTS

GENERATE_METADATA

UPLOAD_TO_YOUTUBE

CLEANUP_STORAGE

---

# 14. Analytics

Track

Projects Created

Videos Processed

Processing Time

Upload Success Rate

Clip Acceptance Rate

User Retention

Revenue

---

# 15. Risks

YouTube API Quotas

Large Processing Costs

GPU Costs

Copyright Issues

Video Download Failures

Scaling Bottlenecks

---

# 16. Future Roadmap (V2)

TikTok Publishing

Instagram Reels Publishing

AI Thumbnail Generator

Multi-language Dubbing

Team Workspaces

Collaborative Editing

Custom AI Models

Viral Prediction Model

Mobile App

White-label Solution

Agency Dashboard

---

# 17. Launch Criteria

Users can register.

Users can submit YouTube URLs.

Videos process successfully.

At least 3 clips generated per video.

Metadata generated automatically.

Users can download clips.

Users can publish to YouTube.

Billing works correctly.

Monitoring and logging enabled.

System deployed to production.

Public SaaS available.
