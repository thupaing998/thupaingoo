'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Wireframe } from '@react-three/drei'
import * as THREE from 'three'

function TorusKnot({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const targetRotation = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    if (!meshRef.current) return
    const [mx, my] = mouse.current
    targetRotation.current.x += (my * 0.5 - targetRotation.current.x) * 0.05
    targetRotation.current.y += (mx * 0.5 - targetRotation.current.y) * 0.05
    meshRef.current.rotation.x = targetRotation.current.x + state.clock.elapsedTime * 0.08
    meshRef.current.rotation.y = targetRotation.current.y + state.clock.elapsedTime * 0.12
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.4, 0.4, 180, 20, 2, 3]} />
      <meshStandardMaterial
        color="#00E5FF"
        wireframe
        emissive="#00E5FF"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8
  }

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#00E5FF" size={0.025} transparent opacity={0.4} />
    </points>
  )
}

function Scene({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00E5FF" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#FF6B35" />
      <TorusKnot mouse={mouse} />
      <FloatingParticles />
    </>
  )
}

export default function ThreeScene() {
  const mouse = useRef<[number, number]>([0, 0])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ]
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 55 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene mouse={mouse} />
    </Canvas>
  )
}
