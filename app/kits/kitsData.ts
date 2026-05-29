import {
  FiZap, FiCpu, FiMove, FiRepeat, FiLayers, FiTrendingUp, FiTool,
  FiMessageSquare, FiBox, FiSettings, FiPlayCircle, FiSearch, FiDisc, FiGlobe,
  FiShield, FiBookOpen, FiSun, FiBattery, FiRotateCcw, FiCheckCircle,
  FiActivity, FiMaximize, FiTriangle, FiTarget, FiGrid, FiSliders, FiPackage
} from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface DownloadFile {
  name?: string;
  text?: string;
  type: string;
  url: string;
  size: string;
}

export interface KitHighlight {
  title: string;
  desc: string;
  icon: IconType;
}

export interface KitObjective {
  text: string;
  icon: IconType;
}

export interface KitIncluded {
  text: string;
  icon: IconType;
}

export interface LearningMedia {
  type: 'image' | 'video';
  src: string;
}

export interface KitData {
  name: string;
  subTitle: string;
  images?: string[];
  image?: string;
  learningMedia?: LearningMedia;
  Icon: IconType;
  gradeLevel: string;
  subject: string;
  description: string;
  downloads?: DownloadFile[];
  introduction?: string;
  content?: string;
  objectives?: KitObjective[];
  coreConcept?: { description?: string; keyTakeaway?: string; highlights: KitHighlight[] };
  whatsIncluded?: KitIncluded[];
  features?: string[];
  [key: string]: unknown;
}

export const kitsData: Record<string, KitData> = {
  'hand-crank-generator': {
    name: 'Hand Crank Generator STEM Kit',
    subTitle: 'Grade 9–10 Focus',
    images: ['/images/education/hand-crank-generator.webp'],
    learningMedia: { type: 'image', src: '/gifs/led-hand-crank-gen.gif' },
    Icon: FiZap,
    gradeLevel: 'Grades 9-10',
    subject: 'Physics, Engineering',
    description: 'A versatile kit designed for school laboratories to illustrate how motors and generators operate.',
    downloads: [
      { name: 'Base Frame (STL)', type: 'STL', url: '#', size: '1.2 MB' },
      { text: 'Gear Assembly (STL)', type: 'STL', url: '#', size: '2.4 MB' },
      { name: 'Print-Ready G-Code (PLA)', type: 'GCODE', url: '#', size: '4.1 MB' }
    ],
    introduction: 'MECH IT EASY develops simple, hands-on science kits that help students understand difficult concepts through practical demonstration. This Hand Crank Generator STEM Kit is designed especially for Grade 9 and 10 students and is intended to be used in school science laboratories. The kit demonstrates one of the most important physics concepts in the secondary-level curriculum: conversion of mechanical energy into electrical energy.',
    objectives: [
      { text: 'To demonstrate the energy conversion between electrical and mechanical energy.', icon: FiRepeat },
      { text: 'To explain the working principle of an electromagnet.', icon: FiLayers },
      { text: 'To illustrate how electromagnets are used in devices such as electric motors and generators.', icon: FiCpu },
      { text: 'To visually demonstrate how the number of coil turns and magnets affect motor speed.', icon: FiTrendingUp },
      { text: 'To promote hands-on experimentation for better conceptual understanding.', icon: FiTool }
    ],
    coreConcept: {
      description: 'When a student rotates the hand crank, mechanical energy is applied. The generator converts this mechanical energy into electrical energy, which can light an LED or power a small load.',
      keyTakeaway: '"Energy can be converted from one form to another but cannot be created or destroyed."',
      highlights: [
        { title: 'Mechanical to Electrical', desc: 'Convert physical motion into usable electrical power.', icon: FiZap },
        { title: 'Electromagnetic Field', desc: 'See how magnets and copper coils interact.', icon: FiLayers },
        { title: 'Motor Mode', desc: 'Switch to battery power to see the generator act as a motor.', icon: FiCpu }
      ]
    },
    whatsIncluded: [
      { text: 'Hand Crank Generator Unit', icon: FiZap },
      { text: 'Copper Coil Assembly', icon: FiRepeat },
      { text: 'Permanent Magnets', icon: FiShield },
      { text: 'Gear Arrangement System', icon: FiSettings },
      { text: 'LED Output Indicator', icon: FiSun },
      { text: '18650 Battery Holder', icon: FiBattery },
      { text: 'Simplified Motor Model', icon: FiCpu },
      { text: 'Shaft and Commutator', icon: FiRotateCcw },
      { text: "Illustrated Teacher's Guide", icon: FiBookOpen }
    ],
  },
  'math-exploration-kit': {
    name: 'Math Exploration Kit',
    subTitle: 'Grade 8–10 Mathematics Focus',
    images: ['/images/home/home-4.webp'],
    learningMedia: { type: 'video', src: 'https://3pz2dqcs9ado1sdm.public.blob.vercel-storage.com/videos/math-exploration.mp4' },
    Icon: FiActivity,
    gradeLevel: 'Grades 8-10',
    subject: 'Mathematics, Algebra, Trigonometry',
    description: 'Transform abstract algebraic ideas into physical, manipulable models that students can see and touch.',
    introduction: 'This Math Exploration STEM Kit is designed especially for Grade 9 and 10 students to visualize the behavior of linear equations and the graphical interpretation of trigonometric functions. The kit transforms abstract algebraic ideas into physical, manipulable models that students can see and touch, promoting hands-on experimentation for better conceptual understanding.',
    objectives: [
      { text: 'Demonstrate the effect of slope (m) and y-intercept (C) on a straight line.', icon: FiTrendingUp },
      { text: 'Visualize y = mx + C through direct physical manipulation of the arm.', icon: FiMaximize },
      { text: 'Observe how sine and cosine values change through a full 360° rotation.', icon: FiRotateCcw },
      { text: 'Connect right-triangle definitions to the unit circle model.', icon: FiTriangle },
      { text: 'Identify x-intercepts and y-intercepts as they shift in real-time.', icon: FiTarget },
      { text: 'Understand the periodic nature and signs of trig functions in all quadrants.', icon: FiActivity }
    ],
    coreConcept: {
      highlights: [
        { title: 'Linear Dynamics', desc: 'Adjust slope and intercept physically to see immediate graphical results.', icon: FiTrendingUp },
        { title: 'Trig Visualizer', desc: 'Dual sliders show sine and cosine as coordinates on a unit circle.', icon: FiRotateCcw },
        { title: 'Coordinate Mastery', desc: 'Identify (x,y) points and calculate rise/run on a physical plane.', icon: FiGrid }
      ]
    },
    whatsIncluded: [
      { text: 'Adjustable Linear Equation Arm', icon: FiMaximize },
      { text: 'Coordinate Plane Baseplate', icon: FiGrid },
      { text: 'Unit Circle Sine/Cosine mechanism', icon: FiDisc },
      { text: 'Dual Mechanical Sliders', icon: FiSliders },
      { text: 'Interchangeable Slope Scales', icon: FiLayers },
      { text: "Comprehensive Teacher's Manual", icon: FiBookOpen }
    ]
  },
  'hydraulic-scissor-lift': {
    name: 'Hydraulic Scissor Lift Kit',
    subTitle: "Pascal's Principle & Fluid Power",
    image: '/images/home/home-4.webp',
    Icon: FiMove,
    gradeLevel: 'Middle - High School',
    subject: 'Fluid Mechanics, Engineering',
    description: "Explains Pascal's Principle and industrial lifting systems.",
    content: "This kit demonstrates Pascal's Law—the principle that pressure applied to a confined fluid is transmitted equally in all directions. Using a dual-syringe hydraulic system, students can see how fluid pressure is converted into mechanical motion to lift heavy objects.",
    features: [
      "Visualize Pascal's Principle",
      'Understand fluid mechanics basics',
      'Dual-syringe hydraulic operation',
      'Relate to heavy industrial machinery'
    ]
  }
};
