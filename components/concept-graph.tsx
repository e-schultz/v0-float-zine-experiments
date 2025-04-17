"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

interface Node {
  id: string
  group: number
  label: string
}

interface Link {
  source: string
  target: string
  value: number
}

interface GraphData {
  nodes: Node[]
  links: Link[]
}

interface ConceptGraphProps {
  data: GraphData
}

export function ConceptGraph({ data }: ConceptGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const width = svgRef.current.clientWidth
    const height = svgRef.current.clientHeight

    // Color scale for node groups
    const color = d3
      .scaleOrdinal()
      .domain([1, 2, 3, 4, 5].map(String))
      .range(["#ff3dbd", "#a64dff", "#4dffff", "#ff4d4d", "#4dff77"])

    // Create a force simulation
    const simulation = d3
      .forceSimulation()
      .force(
        "link",
        d3
          .forceLink()
          .id((d: any) => d.id)
          .distance(100),
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))

    // Process the data to ensure proper format for D3
    const nodes = data.nodes.map((node) => ({ ...node }))
    const links = data.links.map((link) => ({
      ...link,
      source: typeof link.source === "string" ? link.source : link.source.id,
      target: typeof link.target === "string" ? link.target : link.target.id,
    }))

    // Create the links
    const link = svg
      .append("g")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", (d: any) => {
        const sourceGroup = nodes.find((n) => n.id === d.source)?.group || 1
        return color(String(sourceGroup))
      })
      .attr("stroke-width", (d: any) => Math.sqrt(d.value))
      .attr("stroke-dasharray", "5,5")

    // Create the nodes
    const node = svg
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 10)
      .attr("fill", (d: any) => color(String(d.group)))
      .call(drag(simulation) as any)

    // Add labels to the nodes
    const text = svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("dx", 15)
      .attr("dy", ".35em")
      .text((d: any) => d.label)
      .attr("font-family", "monospace")
      .attr("font-size", "12px")
      .attr("fill", "#ff3dbd")

    // Set up the simulation
    simulation.nodes(nodes as any).on("tick", ticked)

    simulation.force<d3.ForceLink<any, any>>("link")!.links(links as any)

    // Update positions on each tick
    function ticked() {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y)

      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y)

      text.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y)
    }

    // Drag functionality
    function drag(simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>) {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        event.subject.fx = event.subject.x
        event.subject.fy = event.subject.y
      }

      function dragged(event: any) {
        event.subject.fx = event.x
        event.subject.fy = event.y
      }

      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0)
        event.subject.fx = null
        event.subject.fy = null
      }

      return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
    }

    // Cleanup
    return () => {
      simulation.stop()
    }
  }, [data])

  return <svg ref={svgRef} width="100%" height="100%" className="bg-black"></svg>
}
